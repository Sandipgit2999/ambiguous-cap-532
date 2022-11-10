import { Box, Grid, Text,Image,} from "@chakra-ui/react";
import React from "react";

export const ProductCard = ({ item }) => {
let str=item.brand.toUpperCase()
// const changeCurrency=()=>{
//   var price = price*80
//   return price
// }

 //toUpperCase()
  return (
    <Grid  >
      <Box border={"1px solid red"}>
        <Image src={item.image_link} h="base"/>
        <Text>{`${item.brand}`.toLocaleUpperCase()}</Text>
        <Text>{item.name}</Text>
        <Text>Rs: {item.price}</Text>
        <Text>{item.id}</Text>
        </Box>
    </Grid>
  );
};
