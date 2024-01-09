import { useState } from 'react'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { ShoppingCartProvider } from '../../Context'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import {SignIn} from '../SignIn'
import { Navbar } from '../../Components/Navbar'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import { BrowserRouter, useRoutes } from 'react-router-dom'

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/',element: <Home/>},
    {path: '/MyAccount',element: <MyAccount/>},
    {path: '/my-orders/last',element: <MyOrder/>},
    {path: '/my-orders/:id',element: <MyOrder/>},
    {path: '/My-orders',element: <MyOrders/>},
    {path: '/*',element: <NotFound/>},
    {path: '/SignIn',element: <SignIn/>}

  ])

  return routes
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
    <AppRoutes/>
    <Navbar/>
    <CheckoutSideMenu/>
    </BrowserRouter>
    </ShoppingCartProvider>
       
   
  )
}

export default App
