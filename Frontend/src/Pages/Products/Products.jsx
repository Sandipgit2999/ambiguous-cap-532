import React, { useState } from "react";

import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Filter } from "../../Components/Filter";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "./ProductCard";
import { useEffect } from "react";
import { getProducts } from "../../Redux/Products/action";
import { useLocation, useSearchParams } from "react-router-dom";
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";

// import styles from "../Pages/Products/ProductCard.module.css"


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
      <Navbar />
      <Flex h="100vh"
        //  border="1px green solid"
        w='100%' >

        <Box>
          <Filter setVal={setVal} />
        </Box>
        <Box h="100%" overflow="scroll" overflowX={"hidden"} className="container">
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            {products.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })}
          </Grid>
        </Box>

      </Flex>
      <Footer />
    </>
  );
};
