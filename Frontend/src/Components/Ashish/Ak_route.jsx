import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Ak_Navbar from './Ak_Navbar'
import Cart_Main from './Cart_Main'

function Ak_route() {
  return (
    <div>
        <Routes>
            <Route path="/"  element={<Ak_Navbar/>} ></Route>
            <Route  path = "/cart" element={<Cart_Main/>} > </Route>
        </Routes>
    </div>
  )
}

export default Ak_route