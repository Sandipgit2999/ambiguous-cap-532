import React from 'react'
import { Routes, Route } from "react-router-dom"

import { Products } from "../Pages/Products"
import ProductInfo from '../Pages/SingleProduct/ProductInfo'

// import HomePage from '../Pages/HomePage'



export const Allroutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomePage/>}></Route> */}
        <Route path="/products" element={<Products />}></Route>
        <Route path='/products/:id' element={<ProductInfo />} />
      </Routes>
    </div>
  )
}
