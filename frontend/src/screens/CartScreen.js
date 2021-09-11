import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Image, ListGroup, Card, Button } from 'react-bootstrap';

import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';

import { addToCart } from '../actions/cartActions'


const CartScreen = ({match, location, history}) => {
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  console.log('qty: ' + qty);
  // console.log('location: ' + location);
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty) )
    }
  }, [dispatch, productId, qty])


  return (
    <div>
      Cart
    </div>
  )
}

export default CartScreen
