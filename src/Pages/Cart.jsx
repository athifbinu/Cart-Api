import React from "react";

import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/CartSlice/CartSlices";

const Cart = () => {
  const CartItem = useSelector((state) => state.cart.cartItems);

  console.log("cartItems", CartItem);

  const dispatch = useDispatch();

  const removeCart = (itemId) => {
    dispatch(cartActions.deleteItem(itemId));
  };

  const incrementQuantity = (itemId) => {
    dispatch(cartActions.incrementQuantity(itemId));
  };

  const decrementQuantity = (itemId) => {
    dispatch(cartActions.decrementQuantity(itemId));
  };

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const totalQuantity=useSelector(state=>state.cart.totalQuantity)

  return (
    <div className="flex items-center justify-between p-5">
      <div className="left ">
        <h1 className="text-black font-bold p-5 text-3xl ">Cart</h1>
        <hr  className="mb-10"/>

        {CartItem.length === 0 ? (
          <h1 className="ml-96 text-3xl mb-16">No Products in cart</h1>
        ) : (
          CartItem.map((item, index) => (
            <div className="flex gap-10" key={index}>
              <div>
                <img className="w-20 h-20 rounded-md" src={item.image} alt="" />
                <br />
              </div>

              <div className="flex  items-center gap-32">
                <div className="font-bold leading-relaxed  flex  ">
                  <p>{item.name}</p>

                  <p className="text-black">RS {item.price}</p>
                </div>

                <div className="items-center flex">
                  <button onClick={() => incrementQuantity(item.id)} className="border border-solid border-gray-500 px-2 py-1 rounded hover:bg-gray-400">
                    +
                  </button>
                  <span className="mx-2 text-black font-bold text-2xl">5</span>
                  <button onClick= {() => decrementQuantity(item.id)}className="border border-solid border-gray-500 px-2 py-1 rounded hover:bg-gray-400">
                    -
                  </button>
                </div>

                <div>
                  <AiOutlineClose
                    onClick={() => removeCart(item.id)}
                    size={15}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))
        )}
        <hr />
      </div>

      <div className="bg-blue-100 text-black p-5 rounded-lg w">
        <h1 className="font-bold p-5 text-2xl">Shopping cart</h1>
        <div className="border border-gray-300 rounded-md p-2  flex justify-between">
          <div>
            <h6 className="text-xl">
              Totel quanity
              <span className="ml-4">:</span>
            </h6>
          </div>
          <div>
            <p className="font-semibold text-end ">{totalQuantity} items</p>
          </div>
        </div>

        <br />
        <div className="border border-gray-300 rounded-md p-2 mb-11 flex justify-between">
          <div>
            <h6 className="text-xl">
              Total Cost
              <span className="ml-11">:</span>
            </h6>
          </div>

          <div>
            <p className="font-semibold ">{totalAmount}</p>
          </div>
        </div>
        <button className=" text-black bg-orange-300 w-full  h-10 cursor-pointer border-none hover:bg-orange-500 mb-5 rounded-sm">
          Proceed To Buy
        </button>

        <button className=" text-black bg-orange-300 w-full rounded h-10 cursor-pointer border-none hover:bg-orange-500">
          Continue shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
