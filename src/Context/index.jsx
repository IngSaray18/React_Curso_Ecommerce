import { createContext } from "react";
import { useState } from "react";
export const ShoppingCartContext = createContext();

import React from "react";

export const ShoppingCartProvider = ({ children }) => {
  const [count, setcount] = useState(0);
  const [isProductDetailOpen, setisProductDetailOpen] = useState(false);
 const [productToShow, setproductToShow] = useState({});
  const openProductDetail = () => {
    setisProductDetailOpen(true);
  };

  const closeProductDetail = () => {
    setisProductDetailOpen(false);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setcount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setproductToShow
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
