import React from "react";

import like from "../../Assets/images/heart.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/CartSlice/CartSlices";
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      })
    );
  };

  return (
    <div
      className="bg-white shadow-1 p-6 rounded-lg rounded-tl-[70px]
 w-full max-w-[300px] mx-auto cursor-pointer hover:shadow-2xl transition "
    >
      
         <Link  to={`/details/${item.id}`}>
             <img className="mb-8 rounded-lg w-44 " src={item.image} alt="" />
         </Link>
      <div className="text-lg mb-4 flex  items-center justify-between ">
        <div>
          <h1 className="font-bold text-black text-3xl ">{item.name}</h1>
        </div>
        <div>
          <img className="w-5" src={like} alt="" />
        </div>
      </div>

      <div className="font-semibold text-black mb-4 flex  justify-between ">
        <div className="flex items-center gap-2">
          <p>RS</p>
          {item.price}
        </div>

        <div className=" items-center">
          <button
            onClick={addToCart}
            className="px-4 py-2  rounded-md bg-blue-500
         text-white transition duration-300 ease-in-out transform
          hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 
          focus:ring-blue-500 focus:ring-opacity-50 "
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
