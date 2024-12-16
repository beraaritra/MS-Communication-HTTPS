const Order = require('../models/orderModel');
const userService = require('../services/userService');
const productService = require('../services/productService');

// Place an Order
exports.placeOrder = async (req, res) => {
    try {
        const { productId } = req.body;
        const userId = req.user.id; // User ID from the authenticated token
        const userToken = req.headers.authorization.split(' ')[1]; // Extract Bearer token

        // Fetch user details from User Service
        const user = await userService.getUserById(userId);
        if (!user) throw new Error('User not found');

        // Fetch product details from Product Service
        const product = await productService.getProductById(productId, userToken); // Pass token
        if (!product) throw new Error('Product not found');

        // Create order
        const order = await Order.create({
            userId,
            productId,
            productDetails: product,
        });

        res.status(201).json({ message: 'Order placed successfully', order });
    } catch (error) {
        console.error('Error placing order:', error.message);
        res.status(400).json({ error: error.message });
    }
};

// Get Orders for Logged-in User
exports.getUserOrders = async (req, res) => {
    try {
        const userId = req.user.id; // User ID from the authenticated token
        const orders = await Order.find({ userId });
        res.json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
