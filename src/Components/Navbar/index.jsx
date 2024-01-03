import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export const Navbar = () => {
  const activeStyle = "underline underline-offset-4 ";
  const context = useContext( ShoppingCartContext )

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 ">
      <ul className="flex items-center gap-3">
        <li className=" font-semibold text-lg ">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/All"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Clothes"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Electronics"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Furniture"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Toys"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Others"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3 ">
        <li className=" text-black/60 " >psaray@hotmail.com</li>
        <li>
          <NavLink
            to={"/MyAccount"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/MyOrders"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/SignIn"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Cart"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
                
             
            
            {context.count > 0 ? 
            
            context.count
            :
            
            "Carrito De Compras"
            }
            
            
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
