import React, {useEffect, useState } from 'react'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail'
export const Home = () => {
const [items , setitems ] = useState();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then (data => setitems(data) )
  }, []);

  
  return (
    <Layout>
      Home
      <div className=' grid gap-4 grid-cols-4 w-full max-w-screen-lg' >
      {
        items?.map( item =>{
        return   <Card data={item} />
        } )
      }
      </div>
      <ProductDetail/>
    </Layout>
  )
}
