const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
},{
    timestamps: true,
});

module.exports = mongoose.model("Order", orderSchema);
