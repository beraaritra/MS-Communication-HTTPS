const axios = require('axios');

exports.getUserById = async (userId) => {
    try {
        const response = await axios.get(`${process.env.USER_SERVICE_URL}/api/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        return null;
    }
};
