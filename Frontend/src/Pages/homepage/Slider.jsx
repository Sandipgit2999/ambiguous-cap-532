import React from 'react'
import  './Slider.css'
import { Carousel } from "react-bootstrap";
export const Slider = () => {
  const slideShowdata = [
     "https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/Benefit_TopBanner_1111saledesktop.jpg",
    //  "https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/Sephora_GenericTopbanner_1111sale.jpg",
    // "https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/SC_Topbanner_1111Saledesktop.jpg"
   
  ]
  

  return (
    <div >
<Carousel infinite={false}>
  {slideShowdata.map((e,i)=>
  (
    <Carousel.Item key={i} interval={3000} >
    <img
      // className="d-block w-100"
      src={e}
      alt="First slide"
      style={{height:"auto",width:"100%"}}
    />
  </Carousel.Item>
  ))}
</Carousel>

   
   </div>
  )
}