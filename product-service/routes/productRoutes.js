const express = require('express');
const {
  createProduct,
  deleteProduct,
  getProducts,
  getProductById,
  getAllProducts,
} = require('../controllers/productController');
const { authenticate, authorizeAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

// Routes for admin
router.post('/add', authenticate, authorizeAdmin, createProduct);
router.delete('/delete/:id', authenticate, authorizeAdmin, deleteProduct);

// Routes for authenticated users
router.get('/', authenticate, getProducts);
router.get('/:id', authenticate, getProductById);
router.get('/',authenticate, getAllProducts);

module.exports = router;
