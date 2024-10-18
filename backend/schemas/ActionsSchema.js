const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
    instrument: { type: String, required: true },          
    eligibleQty: { type: Number, required: true },        
    lastPrice: { type: Number, required: true },            
    holdingPrice: { type: Number, required: true },      
    holdingPL: { type: Number, required: true },         
    auctionNo: { type: String, required: true },        
}, { timestamps: true });

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;
