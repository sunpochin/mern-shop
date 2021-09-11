import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js';

// @desc    Fecth all products
// @route   Get /api/products
// @access  Public
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		// res.status(401)
		// throw new Error('Not authorized.');
		res.json(products);
	})
);


// @desc    Fecth single product
// @route   Get /api/products/:id
// @access  Public
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		// const product = products.find((p) => p._id === req.params.id);

		const product = await Product.findById(req.params.id);
		if (product) {
			res.json(product);
		} else {
			// res.status(404).json({ message: 'Product not found' });
			
			// if remove status(404), it's 500 be default.
			res.status(404)
			throw new Error('Product not found');
		}
	})
);

export default router;
