import React, { useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = () => {
  const location = useLocation()
  const { id } = useParams()
  const productId = id || ''

  // const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const searchParams = new URLSearchParams(location.search)
  const qtyParam = searchParams.get('qty')
  const qty =
    qtyParam && qtyParam.endsWith('/') ? Number(qtyParam.slice(0, -1)) : 1

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  console.log(cartItems)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty, id])
  return <div>CartScreen</div>
}

export default CartScreen
