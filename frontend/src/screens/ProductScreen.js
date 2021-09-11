import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader';
// import products from '../products';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';

const ProductScreen = ({ match }) => {
	const dispatch = useDispatch();

	// const [product, setProduct] = useState({});
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;
	
	// const loading = false;
	// const error = false;

	useEffect(() => {
		dispatch(listProductDetails(match.params.id));

		// console.log('product screen useEffect');
		// const fetchProduct = async() => {
		// 	const res = await axios.get(`/api/products/${match.params.id}`);
		// 	console.log('res.data: ', res, ', match.params.id:', match.params.id);
		// 	setProduct(res.data);
		// }
		// fetchProduct();
	}, [dispatch, match]);

	return (
		<div>
			{/* {product.name} */}
			<Link className='btn btn-light my-3' to='/'>
				Go back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					<Col md={6}>
						<Image fluid src={product.image} alt={product.name} />
					</Col>
					<Col md={3}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>{product.name}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<Rating value={product.rating} text={`${product.numReviews}`} />
							</ListGroup.Item>
							<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
							<ListGroup.Item>
								Description: {product.description}
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col md={3}>
						<Card>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<Row>
										<Col>Price:</Col>
										<Col>
											<strong>${product.price}</strong>
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>Status</Col>
										<Col>
											{product.countInStock ? 'In stock' : 'Out of stock'}
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Button
										className='btn-block'
										type='button'
										disabled={product.countInStock === 0}
									>
										Add to Cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</div>
	);
};

export default ProductScreen;
