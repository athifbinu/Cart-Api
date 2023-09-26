import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Search from "../Pages/Search";
import Cart from "../Pages/Cart";
import ProductDetailes from "../Pages/ProductDetailes";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="details/:id" element={<ProductDetailes/>} />
        <Route path="search" element={<Search />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Routers;
