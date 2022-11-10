import { Box, Grid, Text,Image,} from "@chakra-ui/react";
import React from "react";

export const ProductCard = ({ item }) => {

// const changeCurrency=()=>{
//   var price = price*80
//   return price
// }


  return (
    <Grid templateColumns='repeat(3, 1fr)' >
      <Box border={"1px solid red"}>
        <Image src={item.image_link} w='auto' h='auto' />
        <Text>{item.brand}</Text>
        <Text>{item.name}</Text>
        <Text>Rs: {item.price}</Text>
        <Text>{item.id}</Text>
        </Box>
    </Grid>
  );
};
