import React from 'react'
import { Routes, Route } from "react-router-dom"

import ProductInfo from '../Pages/SingleProduct/ProductInfo'
import { Products } from "../Pages/Products/Products"
import HomePage from '../Pages/homepage/HomePage'



export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path='/products/:id' element={<ProductInfo />} />
      </Routes>
    </div>
  )
}
