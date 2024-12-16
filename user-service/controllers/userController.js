const User = require('../models/userModel');

// Get User by ID
exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id;

        // Validate ID
        if (!userId || userId.length !== 24) {
            return res.status(400).json({ error: 'Invalid user ID format' });
        }

        // Fetch user from the database
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Return user details (excluding sensitive data like password)
        const { _id, firstName, lastName, email, mobile, role, createdAt, updatedAt } = user;
        res.json({
            _id,
            firstName,
            lastName,
            email,
            mobile,
            role,
            createdAt,
            updatedAt,
        });
    } catch (error) {
        console.error('Error fetching user by ID:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
