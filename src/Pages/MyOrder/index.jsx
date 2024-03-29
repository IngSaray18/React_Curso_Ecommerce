import React from 'react'
import { useContext } from 'react'
import { Link } from "react-router-dom";

import { ShoppingCartContext } from '../../Context'
import { Layout } from '../../Components/Layout'
import { OrderCard } from '../../Components/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
export const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)


  if (index === 'last') {
    index = context.order?.length -1
  }


  return (
    <Layout>
        <div className=" flex  w-80 items-center  justify-center  relative  mb-3" >
        <Link  className=" absolute left-0" to={'/my-orders'} >
        <ChevronLeftIcon className=" h-6 w-6 text-black cursor-pointer " />
        </Link>
        <h1>MyOrders</h1>
        
      </div>
      <div className=" flex flex-col w-90 " >
        {
        context.order?.[index]?.products.map(product => (          
            <OrderCard
              key={product.id}
              id = {product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />          
        ))
        }
      </div> 

    </Layout>
  )
}
