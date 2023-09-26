import React from 'react';
import { Link } from 'react-router-dom';
import {BsCartCheck} from "react-icons/bs"
import { useSelector } from 'react-redux';
const Header = () => {


  const totalQuantity=useSelector(state=>state.cart.totalQuantity)
  return (
    <header className="py-6 mb-12 border-b">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/">
        My Cart
      </Link>
      {/* buttons */}
      <div className="flex items-center gap-6">
        <Link
          className="hover:text-violet-900
               transition"
          to="home"
        >
          Home
        </Link>

        <Link
          className="hover:text-violet-900
               transition"
          to="search"
        >
          Search
        </Link>

        <Link
          className="hover:text-violet-900
               transition"
          to="cart"
        >
         <span>{totalQuantity}</span>
          <BsCartCheck size={20}/>
        </Link>
      </div>
    </div>
  </header>
  );
}

export default Header;
