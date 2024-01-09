import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

export const OrdersCard = (props) => {
  const { totalPrice, totalProducts , date } = props;

  return (
    <div className=" flex  flex-col  items-center mb-3  border border-black/50  rounded-lg  w-80  ">
      <div className=" mb-3 ">
        <p>
          <span> Order: </span>
        </p>
      </div>
      <div className=" flex justify-between w-full px-3  items-center ">
        <p className=" flex flex-col  " >
          <span className="text-light" >Order Placed: {date} </span>
          <span className="text-light" > productos: {totalProducts}</span>
        </p>
        <p>
        <span className="text-lg  font-medium " >${totalPrice}</span>

        </p>
      </div>
    </div>
  );
};
