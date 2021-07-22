import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import products from './data/products.js';
import connectDB from './config/db.js';
// const express = require('express');
// const dotenv = require('dotenv');
// const products = require('./data/products');

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
	res.send('api is running');
});

app.get('/api/products', (req, res) => {
	res.json(products);
});

app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(`server running in ${process.env.NODE_ENV} env on port: ${PORT}`.yellow.bold)
);
