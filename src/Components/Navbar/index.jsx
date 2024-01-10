import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
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
            to={"/categories/jewelery"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/categories/electronics"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/categories/mens"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/categories/womens"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Women's clothing
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
            to={"/my-orders"}
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
        <li className="flex items-center " >
             
             
            
            <ShoppingBagIcon className=" h-6 w-6 text-black " />  {context.count}
            
            
         
        </li>
      </ul>
    </nav>
  );
};
