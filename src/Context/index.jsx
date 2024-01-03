import { createContext } from "react";
import { useState } from "react";
 export const ShoppingCartContext = createContext();

import React from "react";

export const ShoppingCartProvider = ({children}) => {
  const [count, setcount] = useState(0);
  console.log(count);

  return (
    <ShoppingCartContext.Provider value={{ count, setcount }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
