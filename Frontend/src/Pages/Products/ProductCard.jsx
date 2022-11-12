import { Box, Grid, Text, Image, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai"

export const ProductCard = ({ item }) => {
  const [visible, setVisible] = useState(false);
  // className={visible?"hov":""}
  return (
    <Grid
      position={"relative"}
      // border={"1px solid red"}
      onMouseEnter={() => {
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
    >
      <Box>
        <Image h={380} src={item.image_link} w={"100%"} />
        <Text mt={2} fontWeight="bold" textTransform={"uppercase"}>
          {item.brand}
        </Text>
        <Text>{item.name}</Text>
        <Text fontWeight="bold" fontSize={13}>
          Rs: {item.price}
        </Text>
        <Text>{item.id}</Text>
      </Box>
      <Box
        className={visible ? "hov" : "nonhover"}
        // bg="#aaf0d1 "
        bg="rgb(22, 236, 208)"
        opacity={1}
        position={"absolute"}
        bottom="0"
        w="100%"
        // border="1px black solid"
        h="200px"
        p="14"
      >
        <Flex justifyContent={"space-between"} alignItems="center">
          <Box>
          <BsHandbag color="white" fontSize={"50"} />
          <Text color="white">SHOP NOW</Text>
          </Box>
          <Box >
          <AiOutlineHeart color="white" fontSize={"55"} />
          <Text color="white">FAVOURITE</Text>
          </Box>
        </Flex>
      </Box>
    </Grid>
  );
};
