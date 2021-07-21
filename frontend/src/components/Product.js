import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
	// console.log('product: ', product.image);
	return (
		<Card className='my-3 p-3 rounded'>
			<a href={`/product/${product._id}`}>
				<Card.Img src={product.image} variant='top' />
			</a>

			<Card.Body>
				<a href={`/product/${product._id}`}>
					<Card.Title as='div'>{product.name}</Card.Title>
				</a>
			</Card.Body>

			<Card.Text as='div'>
				<Rating 
          value={product.rating} 
          text={`${product.numReviews} reviews`} 
        />
				{/* <div className='my-3'>
					{' '}
					{product.rating} from {product.numReviews} reviews{' '}
				</div> */}
			</Card.Text>
			<Card.Text as='h3'>
				<div className='my-3'> ${product.price} </div>
			</Card.Text>
		</Card>
	);
};

export default Product;
