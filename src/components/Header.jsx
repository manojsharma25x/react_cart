import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

const Header = () => {
const navigate = useNavigate();
  const itemLength = useSelector((state)=>state.cart.cartItems.length)
  return (
    <nav>
        <h1 onClick={()=>navigate("/")}>logo</h1>
        <div>
        <Link to="/cart" className="cartIcon"> 
            <FiShoppingBag />
            <p>{itemLength}</p>
        </Link>
        </div>
    </nav>
  )
}

export default Header