import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect, } from "react";
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
import API from "../../Components/Url";


const ProductInfo = () => {
    const [prod, setProd] = useState();
    const { id } = useParams();

    const add = (_id) => {
        axios.get(`${API}/makeup/${_id}`)
            .then((res) => {
                console.log(res.data);
                setProd(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        add(id)
    }, [id])

    return (
        <>
            <Box>
                <Navbar />
            </Box>
            {
                prod && <Box>
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
                                    <BreadcrumbLink href="#">{prod.name}</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Box>
                        <ProductInfomiddle />
                    </Box>
                    <ProductInfobottom />
                </Box>
            }
            <Footer />
        </>
    );
};

export default ProductInfo;

