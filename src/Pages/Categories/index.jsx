import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from '../../Components/Layout'
import { Card } from "../../Components/Card";
export const Categories = () => {
    const context = useContext(ShoppingCartContext);

    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === "mens") {
        index = "men's clothing"
    } else if (index === "womens") {

        index = "women's clothing"
    }
    context.setcategoryItmes(index)
const rederView = ()=>{

    if (index) {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map((item) => {
          
          if (item.category === index) {
            return <Card data={item} />;
          }
            
        })
      ) 
    }else{
      return( 
        <div>
          <h1> no results matched your search </h1>
        </div>
      )
    }
     
    }else{
      return(
        context.items?.map((item) => {
          return <Card data={item} />;
        })
      )
    }
  }


  return (
    <Layout>
        <div className=" grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        { rederView() }
      </div>
    </Layout>
    
  )
}
