import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../Redux/Cartredux/cartaction'
import "./Ak_Navbar.css"
import { BsFillCartFill } from "react-icons/bs";
import {Link} from "react-router-dom";
import {
    Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    WrapItem,
  } from '@chakra-ui/react'
import Ak_cart from './Ak_cart';

function Ak_Navbar() {
    const data1 = useSelector((state)=>state.AshishReducer.data)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCart())
    },[])
    console.log(data1)


    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [placement, setPlacement] = React.useState('right')
  
  return (
    <div>
        <BsFillCartFill ref={btnRef}/>


        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'xs'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Bag</DrawerHeader>
             <hr />
    <DrawerBody>
     
         <div className="body">
            {
                
                data1.map(item=>(
                    <div id="cartbox">

                        <Ak_cart  key={item.id} {...item}/>
                    </div>
                ))

                
            }
         </div>

         
     </DrawerBody>
            <div id="btn">
            <Link to="/cart">
            
            
            <button className="firstbtn">CHECKOUT</button>
            </Link>
          <button  className="lastbtn">View Shopping Bag</button>
            </div>
         
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Ak_Navbar


 
   
      