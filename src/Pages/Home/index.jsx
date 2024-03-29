import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
export const Home = () => {
  const context = useContext(ShoppingCartContext);

  const rederView = ()=>{

    if (context.searchByTitle?.length > 0) {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map((item) => {
          return <Card data={item} />;
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
      <div className=" flex  w-80 items-center  justify-center  relative  mb-4 ">
        <h1 className=" font-medium text-xl ">Exclusive Products</h1>
      </div>
      <input
        onChange={ (e) => context.setsearchByTitle(e.target.value) }
        value={context.searchByTitle}
        type="text"
        placeholder="Search..."
        className="  rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none "
      />
      <div className=" grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        { rederView() }
      </div>
      <ProductDetail />
    </Layout>
  );
};
