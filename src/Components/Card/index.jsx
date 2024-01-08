import React from "react";
import { useContext } from "react";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

import {ShoppingCartContext} from '../../Context'
export const Card = (data) => {

  const context = useContext( ShoppingCartContext )
  const showProducts =(productDetail) => { 
    context. openProductDetail()
    context.setproductToShow(productDetail) 
   }

   const addProductsToCart = (e ,productData) =>{
    e.stopPropagation()
    context.setcount(context.count + 1)
      context.setcartProduct([...context.cartProducts, productData])
      context.OpenCart()
      console.log( context.cartProducts );
   }

   const renderIcon = (id) =>{
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
    
    if (isInCart) {
    return (
    <div
    className=" absolute top-0 right-0 flex justify-center items-center bg-black text-white w-6 h-6  rounded-full m-2 p-1"
  >
    <CheckIcon />
  </div>
  )}else{
    return(
      <div
      onClick={(e) => addProductsToCart( e, data.data)}
      className=" absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6  rounded-full m-2 p-1"
    >
      <PlusIcon/>
    </div>
    )
  }

   }

  return (
    <div
    onClick={() => showProducts(data.data)}
    className=" bg-white cursor-pointer w-56 h-60 ">
      <figure className=" relative mb-2 w-full h-4/5 ">
        <span className=" absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 ">
          {" "}
          {data.data.category}{" "}
        </span>
        <img
          className=" w-full h-full object-cover rounded-lg "
          src={data.data.image}
          alt={data.data.title}
        />
       {renderIcon(data.data.id)}
      </figure>
      <p className=" flex justify-between ">
        <span className=" text-sm font-light ">{data.data.title}</span>
        <span className=" text-lg font-medium ">${data.data.price}</span>
      </p>
    </div>
  );
};
