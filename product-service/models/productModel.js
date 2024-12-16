const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
},{versionKey:false});

module.exports = mongoose.model('Product', productSchema);
