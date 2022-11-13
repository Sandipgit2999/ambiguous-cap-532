import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";
import axios from "axios";
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ProductInfomiddle from "./ProductInfomiddle";
import ProductInfobottom from "./ProductInfobottom";



const ProductInfo = () => {

    
    return (
        <>
            <Box>
                <Navbar />
            </Box>
            <Box w="100%" h="1200px"  >
                <Box ml={{ base: "2", lg: "32" }} mt="5" color="gray">
                    <Breadcrumb
                        spacing="8px"
                        separator={<ChevronRightIcon color="gray.500" />}
                    >
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href="/makeup">Makeup</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#">*{"currprod.Title"}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
                <ProductInfomiddle />
            </Box>
            <ProductInfobottom />
            <Footer />
        </>
    );
};

export default ProductInfo;

