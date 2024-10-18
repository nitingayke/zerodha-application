require("dotenv").config();
const express = require("express");

const Holding = require("./schemas/HoldingSchema.js");
const Position = require("./schemas/PositionsSchema.js");
const Order = require("./schemas/OrdersSchema.js");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute.js");
const Stock = require("./schemas/StockModel.js");
const wrapAsync = require("./ErrorHandling.js");
const Auction = require("./schemas/ActionsSchema.js");

const PORT = process.env.PORT || 9920;
const mongo_url = process.env.MONGO_URL;

main().then(() => {
    console.log("Connection has been establish");
}).catch((error) => {
    console.log(error);
})

async function main() {
    mongoose.connect(mongo_url);
}

const app = express();
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/", authRoute);

app.get("/allHoldings", wrapAsync(async (req, res) => {
    let allHoldings = await Holding.find({});
    res.json(allHoldings);
}));

app.get("/allPositions", wrapAsync(async (req, res) => {
    let allPositions = await Position.find({});
    res.json(allPositions);
}));

app.post("/newOrder", wrapAsync(async (req, res) => {

    let newOrder = new Order({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    let avgCost = Math.random() * 300;

    let newHolding = new Holding({
        Instrument: req.body.name,
        Qty: req.body.stock.holdingQuantity,
        Avg_cost: avgCost,
        LTP: req.body.price,
        Cur_val: req.body.price,
        P_L: (req.body.price - avgCost) * req.body.stock.holdingQuantity,
        Net_chg: req.body.stock.change,
        Day_chg: req.body.stock.changesPercentage * 100,
    });

    await newOrder.save();
    await newHolding.save();
}));

app.get("/getOrders", wrapAsync(async (req, res) => {
    let orders = await Order.find({});
    res.json(orders);
}));

app.get("/stockdata", wrapAsync(async (req, res) => {
    const stockSymbols = ["AAPL", "GOOGL", "MSFT", "AMZN", "TSLA", "FB", "NFLX", "NVDA", "ADBE", "INTC", "CSCO", "ORCL", "PYPL", "CRM", "BABA", "PFE", "KO", "DIS", "V", "MA", "T", "MRK", "PEP", "WMT", "LMT", "XOM", "BA", "HD", "CVX", "IBM"];
    const apiKey = process.env.STOCK_API_KEY;


        const stockDataPromises = stockSymbols.map(symbol =>
            fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`) //Financial Modeling Prep (FMP)
                .then(response => response.json())
                .catch(error => {
                    console.error(`Error fetching data for ${symbol}:`, error);
                    return null;
                })
        );

        const stockDataArray = await Promise.all(stockDataPromises);

        const formattedDataArray = stockDataArray.map(data => {

            if (data && data.length > 0) {
                const stockData = data[0];
                return {
                    name: stockData.name,
                    stockSymbol: stockData.symbol,
                    price: stockData.price,
                    isDown: stockData.change < 0,
                    holdingQuantity: 8,
                    pricePercentage: stockData.changesPercentage * 100,
                    priceAbsolute: stockData.change,
                    change: stockData.change,
                    changesPercentage: stockData.changesPercentage,
                };
            }
            return null;
        }).filter(data => data !== null);

        if (formattedDataArray.length > 0) {
            try {
                await Stock.deleteMany({}); // delete old data

                await Stock.insertMany(formattedDataArray);
                res.status(201).json(formattedDataArray);
            } catch (error) {
                res.status(500).json({ message: "Failed to insert dummy stocks.", error: error.message });
            }

        } else {
            let data = await Stock.find({});
            res.json(data);
        }
}));

app.get("/auctionData", wrapAsync(async(req, res) => {
    let data = await Auction.find({});
    res.json(data);
}));

app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error
    res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
});

app.listen(PORT, () => {
    console.log("backend has been listing");
});