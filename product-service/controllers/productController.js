const Product = require('../models/productModel');

// Create Product (Admin Only)
exports.createProduct = async (req, res) => {
    try {
        const { name, category, price } = req.body;
        const product = await Product.create({ name, category, price });
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete Product (Admin Only)
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) throw new Error('Product not found');
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get Products
exports.getProducts = async (req, res) => {
    try {
        const { category, name } = req.query;
        const filter = {};
        if (category) filter.category = category;
        if (name) filter.name = { $regex: name, $options: 'i' };

        const products = await Product.find(filter);
        res.json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get Product By ID
exports.getProductById = async (req, res) => { 
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) throw new Error('Product not found');
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Get All Products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};