import { createContext } from "react";
import { useState, useEffect } from "react";
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

  // search
  const [searchByTitle, setsearchByTitle] = useState();
  //console.log(searchByTitle);


  // API products

  const [items , setitems ] = useState();
  const [filteredItems, setfilteredItems] = useState();
  const [categoryItems, setcategoryItmes] = useState();
  

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
 // fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then (data => setitems(data) )
  }, []);

  const filteredItemsByTitle = (items, searchByTitle)=>{
    return items?.filter( item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filterItemsByCategory = (  items, category ) =>{
    return items?.filter( item => item.category.includes(category))
  }

  useEffect(() => {
    if (searchByTitle) {
      setfilteredItems( filteredItemsByTitle( items , searchByTitle ) )
    }

  }, [items , searchByTitle]);
  

  useEffect(() => {
    if (categoryItems) {
      setfilteredItems( filterItemsByCategory( items , categoryItems ) )
    }
  }, [ items ,categoryItems ]);

    //  console.log(filteredItems);

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
        setOrder,
        items,
        setitems,
        searchByTitle,
        setsearchByTitle,
        filteredItems,
        setcategoryItmes
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
