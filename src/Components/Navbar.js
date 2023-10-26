import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const items = useSelector((state) => state.cart)

  return (
    <div className="flex items-center justify-between bg-gray-800 text-white p-4 border border-gray-500">
      <span className="text-4xl font-bold outline px-8">SHOPPING CART</span>
      <div className="text-2xl px-8">
        <Link className=" font-semibold hover:text-blue-300" to={"/"}>
          Products
        </Link>
        <Link
          className="px-10 py-1 font-semibold  hover:text-blue-300"
          to={"/Cart"}
        >
          Cart
        </Link>
        <span className="font-semibold">Item's In cart: {items.length}</span>
      </div>
    </div>
  );
}

export default Navbar