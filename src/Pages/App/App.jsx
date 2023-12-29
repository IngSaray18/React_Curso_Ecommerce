import { useState } from 'react'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import {SignIn} from '../SignIn'
import { Navbar } from '../../Components/Navbar'
import { BrowserRouter, useRoutes } from 'react-router-dom'

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/',element: <Home/>},
    {path: '/MyAccount',element: <MyAccount/>},
    {path: '/MyOrder',element: <MyOrder/>},
    {path: '/MyOrders',element: <MyOrders/>},
    {path: '/*',element: <NotFound/>},
    {path: '/SignIn',element: <SignIn/>}

  ])

  return routes
}

function App() {
  return (
    <BrowserRouter>
    <AppRoutes/>
    <Navbar/>
    </BrowserRouter>
  )
}

export default App
