import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { ShoppingCartContext } from "../../Context";
import { totalPrice } from "../../utils";
import { OrderCard } from "../OrderCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  
  const handleDelete = (id)=>{
    const filteredProduct = context.cartProducts.filter(product => product.id != id)
    context.setcartProduct(filteredProduct)
}

 const handleCheckout = () =>{
    const orderToAdd  = {
        date: 'Fecha',
        products: context.cartProducts,
        totalProducts: context.cartProducts.length,
        totalPrice: totalPrice(context.cartProducts)
    }
      //console.log(orderToAdd);
    context.setOrder([...context.order, orderToAdd ])
    context.setcartProduct([])
}


  return (
    <aside
      className={` ${
        context.Cart ? "flex" : "hidden"
      } Checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg  bg-white`}
    >
      <div className="flex justify-between items-center p-6 ">
        <h2>My order</h2>
        <div onClick={() => context.CloseCart()}>
          <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer " />
        </div>
      </div>
      <div className=" px-6 overflow-scroll  flex-1 " >
        {context.cartProducts.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id = {product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              handleDelete = {handleDelete}
            />
          );
        })}
      </div>
      <div className=" px-6 mb-6  " >
        <p className=" flex justify-between items-start " >
            <span className=" text-light " >Total: </span>
            <span className=" font-medium text-2xl " > ${totalPrice(context.cartProducts)} </span>
        </p>
        <Link to={'my-orders/last'} >
        <button className=" w-full bg-black py-3 text-white rounded-lg mt-3 "  onClick={  () => handleCheckout() } > Checkout </button>
        </Link>
        
      </div>

    </aside>
  );
};
