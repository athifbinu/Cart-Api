import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Search from "../Pages/Search";
import ProductDetailes from "../Pages/ProductDetailes";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Cart from "../Pages/Cart";

const Routers = () => {
  const checkUser = () => {
    const user = localStorage.getItem("user");
    return !!user;
  };

  const ProtectedRoute = ({ element, ...rest }) => {
    if (checkUser()) {
      return element;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="details/:id" element={<ProductDetailes />} />
        <Route path="search" element={<Search />} />
        <Route
          path="cart"
          element={
            <React.Fragment>
              {/* Use the ProtectedRoute component */}
              <ProtectedRoute element={<Cart />} />
            </React.Fragment>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Routers;
