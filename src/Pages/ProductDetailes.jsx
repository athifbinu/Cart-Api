import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

import HeroImg from "../Assets/images/product_09.jpg";
import HomeDeli from "../Assets/images/homed.jpeg";
import DroneDeli from "../Assets/images/drone.jpeg";
import FastDeli from "../Assets/images/bike.jpeg";
import { useParams } from "react-router-dom";
import products from "../Assets/data/products";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/CartSlice/CartSlices";

const ProductDetailes = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  console.log("useparamsid", id);

  const dispatch = useDispatch();

  useEffect(() => {
    const selectedProduct = products.find((item) => item.id === parseInt(id));

    if (selectedProduct) {
      setProduct(selectedProduct);
    }

    return () => {
      setProduct(null);
    };
  }, [id, products]);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
  };
  

  return (
    <section>
      <div className="container mx-auto p-5">
        <div className="md:flex items-center ">
          <div className="md:w-4/12">
            <div className="product__main-img">
              {product && (
                <img
                  className="rounded-lg"
                  src={product.image}
                  alt={product.name}
                />
              )}
            </div>
          </div>

          <div className="md:w-6/12 p-14">
            <div className="">
              <h1 className="text-black font-bold text-3xl ">
                {product && <div>{product.name}</div>}
              </h1>
              <div className="flex mb-5">
                <div className=" flex gap-x-2 text-sm items-center">
                  <div className="  text-yellow-400  flex gap-2">
                    <BsFillStarFill size={15} />
                    <BsFillStarFill size={15} />
                    <BsFillStarFill size={15} />
                    <BsFillStarFill size={15} />
                    <BsFillStarFill size={15} />
                  </div>
                  <div className=" text-black px-3 font-bold text-1xl">
                    <h2>5.5</h2>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mb-2">
                <p>Category</p>
                <p>|</p>
                <p>Test</p>
              </div>

              <div className="mb-5">
                <p>Hello Would</p>
              </div>

              <div className="flex gap-3 mb-5">
                <div>
                  <img className="w-8" src={HomeDeli} alt="" />
                  <p>Free Delivery</p>
                </div>

                <div>
                  <img className="w-8" src={DroneDeli} alt="" />
                  <p>Free Delivery</p>
                </div>

                <div>
                  <img className="w-8" src={FastDeli} alt="" />
                  <p>Free Delivery</p>
                </div>
              </div>

              <div className="">
                <button
                  onClick={addToCart}
                  className=" text-black bg-orange-300 p-2  rounded  cursor-pointer border-none hover:bg-orange-500"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailes;
