import React from "react";
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const {subTotal,shipping, tax, total} = useSelector((state)=>state.cart);
  console.log(subTotal);
  const handleIncrement = (product) => {
    dispatch({
      type: "addToCart",
      payload: product,
    });
    dispatch({
      type: "calculation"
    });
  };
  const handleDecrement = (productId) => {
    dispatch({
      type: "decrement",
      payload: productId,
    });
    dispatch({
        type: "calculation"
      });
  };
  const handleRemove = (productId) => {
    dispatch({
      type: "removeFromCart",
      payload: productId,
    });
    dispatch({
        type: "calculation"
      });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-9 col-lg-8">
          {cartItems?.map((ci, i) => {
            const { id, title, image, price, quantity } = ci;
            return (
              <div className="cartCard card mb-3" key={i}>
                <div className="img">
                  <img src={image} alt="" />
                </div>
                <div className="cartTitle">
                  <h5>{title}</h5>
                  <p className="price mb-0">{price} INR</p>
                </div>
                <div className="quantityBox">
                  <div className="d-flex">
                    <button onClick={() => handleDecrement(id)}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => handleIncrement(ci)}>+</button>
                  </div>
                </div>
                <div className="deleteBox">
                  <button onClick={() => handleRemove(id)}><AiFillDelete className="text-danger"/></button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-12 col-md-3 col-lg-4">
            <h3>Order Summary</h3>
            <p>Subtotal: {subTotal}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total: {total}</p>
          
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
