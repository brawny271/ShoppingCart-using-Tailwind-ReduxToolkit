import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, increase, decrease } from "../Redux/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(remove(item));
  };

  const handleIncrease = (item) => {
    dispatch(increase(item));
  };

  const handleDecrease = (item) => {
    dispatch(decrease(item));
  };

  const handleTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => (total += item.totalPrice));
    return total.toFixed(2);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center py-10">
          <h3 className="text-3xl font-semibold">Cart Items</h3>
        </div>
        <div className="flex h-auto w-auto flex-col justify-between">
          <table className="w-full h-auto flex flex-col ">
            <thead className="flex justify-center w-full h-10">
              <tr className="flex w-full h-full justify-around items-center  py-6 shadow-md border pr-8">
                <th className="w-20 pr-6">Product</th>
                <th className="w-60 pr-8">Name</th>
                <th className="">Price</th>
                <th className="">Total Price</th>
                <th className="pr-16">Quentity</th>
                <th className="">Remove</th>
              </tr>
            </thead>
            <tbody className="flex w-full h-auto justify-center items-center flex-col">
              {cartItems.map((item) => (
                <tr
                  className="flex justify-between items-center w-full h-300 px-10 py-4 shadow-lg"
                  key={item.id}
                >
                  <td>
                    <img
                      className="h-20 w-20 object-contain"
                      src={item.image}
                      alt="Title"
                    />
                  </td>
                  <td className="text-lg font-semibold w-60">{item.title}</td>
                  <td className="text-lg font-semibold">{item.price}</td>
                  <td className="text-lg font-semibold">{item.totalPrice}</td>
                  <div className="flex flex-row items-center">
                    <button
                      className="font-semibold text-lg w-6 border hover:bg-slate-400"
                      onClick={() => handleIncrease(item.id)}
                    >
                      +
                    </button>
                    <h5 className="font-semibold mx-2">{item.quantity}</h5>
                    <button
                      className="font-semibold text-lg w-6 border hover:bg-slate-400"
                      onClick={() => handleDecrease(item.id)}
                    >
                      -
                    </button>
                  </div>
                  <div>
                    ``
                    <button
                      className="bg-black-500 hover:bg-gray-700 text-black hover:text-white font-bold py-2 w-40 max-w-xs outline rounded"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full h-10 flex justify-center items-center outline my-4 mb-6 mt-8">
            <span className="font-semibold text-lg">
              Total: $ {handleTotalPrice()}
            </span>
          </div>
        </div>
        {/* <div className="w-full h-10 flex justify-center items-center outline my-4">
          <span className="font-semibold text-lg">
            Total:{handleTotalPrice()}
          </span>
        </div> */}
      </div>
    </>
  );
};

export default Cart;
