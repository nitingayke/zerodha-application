const mongoose = require("mongoose");

const holdingSchema = new mongoose.Schema({
    Instrument: String,
    Qty: Number,
    Avg_cost: Number,
    LTP: Number,
    Cur_val: Number,
    P_L: Number,
    Net_chg: Number,
    Day_chg: Number
});

module.exports = mongoose.model("Holding", holdingSchema);
