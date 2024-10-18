const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
    Instrument: String,  
    Qty: Number,        
    Avg: Number,         
    LTP: Number,         
    Net_Change: Number,  
    P_L: Number,         
    Product: String      
});

module.exports = mongoose.model("Position", positionSchema);
