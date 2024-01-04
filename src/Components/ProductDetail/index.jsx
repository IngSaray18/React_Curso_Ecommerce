import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import { data } from "autoprefixer";
export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  console.log(context.productToShow);
  return (
    <aside
      className={` ${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail  flex-col fixed right-0 border border-black rounded-lg  bg-white`}
    >
      <div className="flex justify-between items-center p-6 ">
        <h2>Detail</h2>
        <div onClick={() => context.closeProductDetail()}>
          <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer " />
        </div>
      </div>
      <figure className="px-6" >
        <img
          className="  w-full  h-full rounded-lg "
          src={context.productToShow.image}
          alt={context.productToShow.title}
        /> 
        </figure>
        <p className=" flex flex-col p-6" >
          <span className=" font-medium text-2xl mb-3 " > ${context.productToShow.price} </span>
          <span  className=" font-medium text-md " > {context.productToShow.title} </span>
          <span  className=" font-light text-sm " > {context.productToShow.description} </span>

        </p>
     

    </aside>
  );
};
