import React from "react";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Filter } from "../Filter";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "./ProductCard";
import { useEffect } from "react";
import { getProducts } from "../../Redux/Products/action";

export const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, []);

  //console.log(products);

  return (
    <Flex>
      <Filter/>
    <Flex
      direction="column"
      justifyContent="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      minH="100vh"
    >
      <Grid
        w="full"
        gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
      >
       {
  products.map((item)=>{
    return  <ProductCard key={item.id} item={item}/>
  }
       
  )
 } 
      </Grid>
    </Flex>
    </Flex>
  );
};


