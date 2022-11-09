import React from 'react'
import {Routes,Route} from "react-router-dom"
import {Products} from "../Pages/Products"

export const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/products" element={<Products/>}></Route>
        </Routes>
    </div>
  )
}
