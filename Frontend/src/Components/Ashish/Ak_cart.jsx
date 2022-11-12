import React from 'react'
import "./Ak_cart.css"

const Ak_cart = ({
    name,
    image_link,
    price,
    title,
    price_sign,
    category,
    product_type
}) => {
    // console.log(item)
  return (
    <div id="maincart">
        <div >
            <img src={image_link} className="img"></img>
        </div>
        <div>
            <h5>{name}</h5>
                <p>{product_type}</p>
            <p>size:{category}</p>
            <br />
            <p>{price_sign}:{price}</p>
        </div>
  






    </div>
  )
}

export default Ak_cart