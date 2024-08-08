import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import UnderFotter from './components/UnderFooter/UnderFotter'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CatchError from './components/CatchError/CatchError'
import Layout from './components/Layout/Layout'

const router=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'about',element:<About/>},
    {path:'Portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<CatchError/>},
  ]
}]);
function App() {
  
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
