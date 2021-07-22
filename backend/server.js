import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
// const express = require('express');
// const dotenv = require('dotenv');
// const products = require('./data/products');

import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
	res.send('api is running');
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(`server running in ${process.env.NODE_ENV} env on port: ${PORT}`.yellow.bold)
);
