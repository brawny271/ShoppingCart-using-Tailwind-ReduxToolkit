import React, { useState, useEffect } from 'react';
import { add } from '../Redux/CartSlice';
import { useDispatch } from 'react-redux';

const Product = () => {
    const [products, setProducts] = useState([])
    console.log(products)

    const dispatch =  useDispatch()

    useEffect(()=>{
        const fetchProducts = async()=>{
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data)
        };
        fetchProducts()
    },[])

    const handleadd =(item) => {
        dispatch(add(item));
        alert("Product is added to cart");
    }

  return (
    <>
      <div className="container px-5 py-24 mx-auto ">
        <div className="grid grid-cols-4 gap-4">
          {products.map((item) => (
            <div
              className=" flex justify-items-center justify-around flex-col mt-6 h-90 w-75 border cursor-pointer shadow-2xl rounded-lg"
              key={item.id}
            >
              <img className=" h-2/4 object-contain" src={item.image} />
              <h4 className="text-2xl font-bold px-8">{item.title}</h4>
              <h5 className="text-xl font-bold px-8">$ {item.price}</h5>
              <div className="w-full flex justify-center">
               
                <button
                  className="bg-black-500 hover:bg-gray-700 text-black hover:text-white font-bold py-2 w-40 max-w-xs outline rounded"
                  onClick={() => handleadd(item)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product