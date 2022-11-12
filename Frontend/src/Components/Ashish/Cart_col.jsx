import React from 'react'
import "./Ak_col.css"
function Cart_col({
    image_link,
    name,
    brand,
    product_type,
    price
}) {
 
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
                          <u>Move to Favourite</u>
                          <u>Remove</u>

                        </div>
                   

        </div>

       <div className='qut'>
             <h4>Qty</h4>



             <div  className='quant'>
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
          </select>



        </div>


    

       </div>


           <div  className='last1'>

            <h1>Rs.{Math.floor(price*800)}</h1>
           </div>

       
      


    







  </div>

    <hr />




</div>
  )
}

export default Cart_col