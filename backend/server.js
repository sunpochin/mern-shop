import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import colors from 'colors';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import connectDB from './config/db.js';
// const express = require('express');
// const dotenv = require('dotenv');
// const products = require('./data/products');

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB();

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')));

	app.get('*', (req, res) => {
		const name = path.resolve(__dirname, 'frontend', 'build', 'index.html');
		console.log('name: ', name);
		res.sendFile(name);
	});
} else {
	app.get('/', (req, res) => {
		res.send('api is running');
	});
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(
		`server running in ${process.env.NODE_ENV} env on port: ${PORT}`.yellow.bold
	)
);
