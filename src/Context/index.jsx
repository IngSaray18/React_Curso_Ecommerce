import { createContext } from "react";
import { useState } from "react";
export const ShoppingCartContext = createContext();

import React from "react";

export const ShoppingCartProvider = ({ children }) => {
  const [count, setcount] = useState(0);
  const [productToShow, setproductToShow] = useState({});
  const [cartProducts, setcartProduct] = useState([]);

//    Pruduct Detail
  const [isProductDetailOpen, setisProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setisProductDetailOpen(true);
  };

  const closeProductDetail = () => {
    setisProductDetailOpen(false);
  };

//cart
  const [Cart, setCart] = useState();
  const OpenCart = () => setCart(true)
  const CloseCart = () => setCart(false)


  //    Order
  const [order, setOrder] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setcount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setproductToShow,
        cartProducts,
        setcartProduct,
        Cart,
        setCart,
        OpenCart,
        CloseCart,
        order,
        setOrder

      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
