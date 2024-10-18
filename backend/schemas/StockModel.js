const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
    name: String,
    stockSymbol: String,
    price: Number,
    isDown: Boolean,
    holdingQuantity: Number,
    pricePercentage: Number,
    priceAbsolute: Number,
    change: Number,
    changesPercentage: Number,
}, { timestamps: true });

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
