import { Box, Grid, Text, Image } from "@chakra-ui/react";
import React from "react";




export const ProductCard = ({ item }) => {
  
  return (
    <Grid >
      <Box border={"1px solid red"}>
        <Image src={item.image_link} h="base" />
        <Text fontWeight="bold" textTransform={"uppercase"}>{item.brand}</Text>
        <Text>{item.name}</Text>
        <Text>Rs: {item.price}</Text>

      </Box>
    </Grid>
  );
};
