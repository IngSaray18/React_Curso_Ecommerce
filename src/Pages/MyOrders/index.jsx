import React from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { Link } from "react-router-dom";
export const MyOrders = () => {
  const context = useContext(ShoppingCartContext);
  console.log(context.order);
  return (
    <Layout>
      <div className=" flex  w-80 items-center  justify-center  relative ">
        <h1  className=" font-medium text-xl " >MyOrders</h1>
      </div> 

      {context.order.map((order, index) => {
        return (
          <Link to={`/my-orders/${index}`}>
            <OrdersCard
              key={index}
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
              date={order.date}
            />
          </Link>
        );
      })}
    </Layout>
  );
};
