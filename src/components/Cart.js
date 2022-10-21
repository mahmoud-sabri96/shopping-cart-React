import React, { useEffect, useState } from 'react'
import { Button, ButtonToolbar, Image, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clear, removeFromCart } from '../rtk/slices/cart-slice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();



  const totalPrice = cartItems.reduce((acc, item) => {
    acc += item.price * item.qty;
    return acc;
  }, 0)

  return (
    <div className="py-5  mt-5 px-3">
      <Button variant="outline-danger" onClick={() => dispatch(clear())} className="d-block mx-auto" >Clear ALL Cart Items</Button>
      <h5 className='mt-3'>Total Price : {totalPrice.toFixed(2)} $</h5>
      <Table striped bordered hover size="sm" className="py-5 mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product) => (
            <tr key={Math.random() * product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td className='text-center'><Image src={product.image} alt={product.product} style={{ width: "100px", height: "100px" }} /></td>
              <td>{product.price}</td>
              <td>{product.qty}</td>
              <td><Button variant="danger" onClick={() => dispatch(removeFromCart(product.id))}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div >

  )
}

export default Cart;