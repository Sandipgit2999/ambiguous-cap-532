import React from "react";
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
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location || products.length === 0) {
      let getProductParams = {
        params: {
          brand: searchParams.getAll("brand"),
          category: searchParams.getAll("category"),
        },
      };
      dispatch(getProducts(getProductParams));
    }
  }, [location.search]);

  console.log(products);

  return (
    <>
      {/* <Navbar/> */}
      <Flex>
        <Filter />
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
    </>
  );
};
