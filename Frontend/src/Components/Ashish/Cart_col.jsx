import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getCart } from '../Redux/Cartredux/cartaction';
import { useDispatch, useSelector } from 'react-redux'
import "./Ak_col.css"
function Cart_col({
  _id,
          image_link,
          name,
          brand,
          product_type,
          price
}) {
  const [amt,setamt]  = useState(1)

  const data1 = useSelector((state)=>state.AshishReducer.data)
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getCart())
  },[])
  // console.log(data1)
  


  const addfav=(id)=>{
     axios.post(`https://ambigious-cap-backend.onrender.com/favourite/create/${id}`)
     .then((res)=>console.log(res))
     .catch((err)=>console.log(err))
    
  }
 

  const removecart=(id)=>{
    axios.delete(`https://ambigious-cap-backend.onrender.com/cart/delete/${id}`)
    .then((res)=>console.log(res),
    dispatch(getCart()))
    .catch((err)=>console.log(err))
  }



  return (
<div>

       
    

  <div className='main'>

                <div >
                    <img className='proimg' src={image_link} alt="" />

                </div>

        <div className='detail'>
                    <p>{brand}</p>
                    <h4>{name}</h4>
                  <div style={{"display":"flex"}} id="d1">
                                <h5>Category- </h5>
                                <p>{product_type}</p>
                                        </div>
                    <div className='d2'>

                                 <div >

                                     <img src="https://s3-ap-southeast-1.amazonaws.com/web-resources-odin/promoicon.png" alt="" />
                                 </div>

                                 <div id="pink">
                                  <p>Buy 1 Get {Math.floor(Math.random() * 80)}% off</p>
                                     
                                 </div>
                    </div>

                        <div id="remove">
                          <u onClick={()=>addfav(_id)}>Move to Favourite</u>
                          <u onClick={()=>removecart(_id)}>Remove</u>

                        </div>
                   

        </div>

       <div className='qut'>
             <h4>Qty</h4>



             <div  className='quant'>
    <button id="b1" onClick={()=>{setamt(amt+1)}}>+</button>
  <h3>{amt}</h3>
    <button id="b2" onClick={()=>{setamt(amt-1)}}>-</button>


        </div>


    

       </div>


           <div  className='last1'>

            <h1>Rs.{Math.floor(price*200 )*amt}</h1>
           </div>

       
      


    







  </div>

    <hr />




</div>
  )
}

export default Cart_col