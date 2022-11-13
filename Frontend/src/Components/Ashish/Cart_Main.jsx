import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../Redux/Cartredux/cartaction'
import "./Ak_Navbar.css"
import "./Cart.css"
import {FaRegUser } from "react-icons/fa";
import Cart_col from './Cart_col';


function Cart_Main() {
    const data1 = useSelector((state)=>state.AshishReducer.data)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCart())
    },[])
    console.log(data1)
    
  return (
    <div>
                <div className='a1'>

                        <div className='img1'>
                            <img className='img2' src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png" alt="" />
                        </div>

                        <div className='logo'>
                            <FaRegUser id="fa"/>
                            <p>Login</p>

                        </div>

                </div>

                    <div className='bag'>
                        <h2 className='bag1'>MY BAG</h2>
                    </div>

         <div className='data'>
                    <div className='col1'>
                    <div style={{"height":"20px"}}>

</div>
                        {
                            data1.map(e=>(
                                <Cart_col key={e.id} {...e}/>
                            ))
                        }

                    </div>


                    <div id="col2">

                        <div className='code'>
                                <img src="https://static.nnnow.com/client/assets/images/promotions/icon_promo.png" alt="" />
                                <h2>CHANGE PROMO CODE</h2>
                        </div>


                        <div className='total'>
                            <h1>Overview</h1>
                            
                            <div className='price'>
                                <div className='t1'>

                                <p>Subtotal</p>
                                <p>Rs.2200</p>

                                </div>


                                <div className='t2'>

                                    <p>Discount</p>
                                    <p>Rs.2200</p>

                                </div>


                                <div className='t3'>

                                    <p>GST</p>
                                    <p>Rs.0</p>

                                    </div>

                                    <div className='t4'>

                                        <p>DILEVERY CHARGES</p>
                                        <p>Rs.0</p>

                                        </div>
                                        <br />

                                        <hr
                                            style={{
                                            
                                            background: "black",
                                            height: "1px",
                                            border: "none",
                                            }}
                                            />

                                            <div className='t5'>
                                                <h2>Total</h2>
                                                <h2> Rs.20000</h2>


                                            </div>





                            </div>





                        </div>


                        <br />


                        <button className="firstbtn">CHECKOUT</button>
                         <button  className="lastbtn">SHOP MORE</button>
                
                    <div className='sbi'>
                        <img src="https://static.nnnow.com/mybag_offer_banner.jpg" alt="" />

                    </div>




                    </div>

                    


                  
         </div>






    </div>
  )
}

export default Cart_Main