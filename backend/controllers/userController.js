import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc    Auth user and get token.
// @route   Post /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
	console.log('req.body:', req.body );
	//  const {email, password} = req.body
	// const products = await Product.find({});
  res.send("okok");
	// res.send({ 
  //   email, 
  //   password, });
});

export { authUser };
