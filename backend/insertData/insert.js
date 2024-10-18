require("dotenv").config();
const express = require("express");

const Holding = require("./schemas/HoldingSchema.js");
const Position = require("./schemas/PositionsSchema.js");
const Order = require("./schemas/OrdersSchema.js");

const app = express();
const mongoose = require("mongoose");
const mongo_url = process.env.MONGO_URL;

main().then(() => {
    console.log("Connection has been establish");
}).catch((error) => {
    console.log(error);
})

async function main() {
    mongoose.connect(mongo_url);
}


app.get("/insert#", async (req, res) => {

    const positions = [
        { Instrument: "RELIANCE", Qty: 100, Avg: 2500.00, LTP: 2520, Net_Change: 20, P_L: 2000, Product: "CNC" },
        { Instrument: "TCS", Qty: -50, Avg: 3600.50, LTP: 3550, Net_Change: -50, P_L: -2500, Product: "CNC" },
        { Instrument: "INFY", Qty: 0, Avg: 1500.00, LTP: 1525, Net_Change: 25, P_L: 1875, Product: "MIS" },
        { Instrument: "HDFC", Qty: 0, Avg: 2800.75, LTP: 2780, Net_Change: -20, P_L: -600, Product: "CNC" },
        { Instrument: "SBIN", Qty: -200, Avg: 450.10, LTP: 460, Net_Change: 9.90, P_L: 1980, Product: "CNC" },
        { Instrument: "ICICIBANK", Qty: 150, Avg: 875.60, LTP: 870, Net_Change: -5.60, P_L: -840, Product: "MIS" },
        { Instrument: "BHARTIARTL", Qty: 60, Avg: 700.25, LTP: 710, Net_Change: 9.75, P_L: 585, Product: "CNC" },
        { Instrument: "WIPRO", Qty: 0, Avg: 400.50, LTP: 395, Net_Change: -5.50, P_L: -660, Product: "MIS" },
        { Instrument: "ITC", Qty: 5, Avg: 240.30, LTP: 245, Net_Change: 4.70, P_L: 376, Product: "CNC" },
        { Instrument: "MARUTI", Qty: -40, Avg: 8900.00, LTP: 8850, Net_Change: -50, P_L: -2000, Product: "CNC" }
    ];

    try {
        let data = await Position.insertMany(positions);
        console.log(data);
        return res.send("All data inserted successfully");

    } catch (error) {
        return res.send(error);
    }
});