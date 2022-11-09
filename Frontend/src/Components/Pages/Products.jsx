import React from "react";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Filter } from "./Filter";
import {useSelector,useDispatch} from "react-redux"
import {ProductCard} from "./ProductCard"
import { useEffect } from "react";
import { getProducts } from "../../Redux/Products/action";

export const Products = () => {
  const products = useSelector(state=>state.products)
  const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(getProducts)
   },[])

   console.log(products)
   





  return (
    <Flex>
      <Filter />
      <Box>
       {/* {
        products.map((item)=>{
            return <ProductCard key={item.id} item={item}/>
        })
       } */}
      </Box>
    </Flex>
  );
};
