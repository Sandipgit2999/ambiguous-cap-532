import { Box, Grid, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";




export const ProductCard = ({ item }) => {
  const [img,setImg]= useState(item.image_link)

  const showOriginalImage=()=>{
    setImg(item.image_link)
  }

  const showOtherImage = ()=>{
    setImg(item.api_featured_image)
  }
  
  return (
    <Grid >
      <Box border={"1px solid red"} onMouseEnter={showOtherImage} onMouseLeave={showOriginalImage}>
        <Image src={img} h="base" />
        <Text fontWeight="bold" textTransform={"uppercase"}>{item.brand}</Text>
        <Text>{item.name}</Text>
        <Text>Rs: {item.price}</Text>
        <Text>{item.id}</Text>

      </Box>
    </Grid>
  );
};
