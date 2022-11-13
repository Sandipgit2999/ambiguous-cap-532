import React from 'react'
import { Routes, Route } from "react-router-dom"

import ProductInfo from '../Pages/SingleProduct/ProductInfo'
import { Products } from "../Pages/Products/Products"
import HomePage from '../Pages/homepage/HomePage'
import { Signup } from '../Pages/rejister/Singup'
import Login from '../Pages/rejister/Login'
import Checkout from '../Pages/Checkout'
import Payments from '../Pages/Payments'



export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path='/products/:id' element={<ProductInfo />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/payments' element={<Payments />} />

      </Routes>
    </div>
  )
}
