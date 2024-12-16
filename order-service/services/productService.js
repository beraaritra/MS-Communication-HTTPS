const axios = require('axios');

exports.getProductById = async (productId, userToken) => {
    try {
        const response = await axios.get(`${process.env.PRODUCT_SERVICE_URL}/api/products/${productId}`, {
            headers: {
                Authorization: `Bearer ${userToken}`, // Add the user's token to the request
            },
        });

        if (response.status === 200) {
            return response.data; // Valid product data
        }
        return null; // Product not found
    } catch (error) {
        console.error(`Error fetching product: ${error.message}`);
        return null; // Ensure consistent return on errors
    }
};
