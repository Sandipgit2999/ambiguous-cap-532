import React, { useState } from "react";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Filter } from "../Filter";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "./ProductCard";
import { useEffect } from "react";
import { getProducts } from "../../Redux/Products/action";
import { useLocation, useSearchParams } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export const Products = () => {
  const products = useSelector((state) => state.products);
  const [newProd, setNewProd] = useState([...products] || []);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    if (location || products.length === 0) {
      const sortBy = searchParams.get("sortBy");
      let getProductParams = {
        params: {
          brand: searchParams.getAll("brand"),
          category: searchParams.getAll("category"),
          price: searchParams.getAll("price"),
          _sort: sortBy && "price",
          _order: sortBy,
        },
      };
      console.log(getProductParams);
      dispatch(getProducts(getProductParams));
    }
  }, [location.search]);
  function setVal(a, b) {
    //  console.log("in")
    let data = products
      .filter((e) => e.price >= a || e.price < b)
      .sort((x, y) => x.price - y.price);
    // console.log(data,"sortinggsdfgdgfgfg")

    setNewProd(data);
    // console.log(data,"sorted")
  }
  //console.log(newProd,"out")

  return (
    <>
       <Navbar/>
   
    <Box >
     
      
      <Flex>
        
        <Filter setVal={setVal} />
        <Flex
          direction="column"
          justifyContent="center"
          maxW={{ xl: "1200px" }}
          m="0 auto"
          minH="100vh"
        >
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            {products.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })}
          </Grid>
        </Flex>
      </Flex>
      <Footer />
    </Box>
    </>
  );
};
