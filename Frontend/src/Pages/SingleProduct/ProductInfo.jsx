import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./Productinfo.module.css"
//import MainNavbar from "../Components/MainNavbar";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsFillBagPlusFill } from "react-icons/bs";
import { RiHeartAddLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import axios from "axios";
import {
    Box,
    Text,
    Breadcrumb,
    BreadcrumbItem,
    Image,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Grid,
    GridItem,
    Input,
    Slider,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
//import SingleProdbottom from "../Components/SingleProdbottom";
//import ProductReviews from "../Components/ProductReviews";
//import Footer from "../Components/Footer";


const SingleProduct = () => {
    // const dispatch = useDispatch();
    const [active, setActive] = useState(false);
    const [finerdetails, setFinerdetails] = useState(true);
    const [aboutsephora, setAboutsephora] = useState(false)
    const [returnexchange, setReturnexchange] = useState(false)
    // const product = useSelector((store) => store.AppReducer.productData);
    // const { id } = useParams();
    // const [currprod, setCurrprod] = useState({});
    // const { Images } = currprod;
    // // console.log(Iamges)
    // const [price, setPrice] = useState(0);
    // const [quantity, setQuantity] = useState(1);

    // // console.log(currprod);

    // const handleAddToCart = (payload) => {
    //     payload = { ...payload, Quantity: quantity };

    //     const token = localStorage.getItem("token");
    //     axios
    //         .post("https://stark-lake-19402.herokuapp.com/cart/create", payload, {
    //             headers: {
    //                 token: "Bearer " + token,
    //                 "Content-Type": "application/json",
    //             },
    //         })
    //         .then((res) => {
    //             console.log(res.data);
    //             alert("Item has successfully added to cart")
    //         })
    //         .catch((err) => console.log(err));
    // };

    // useEffect(() => {
    //     if (product.length === 0);
    //     // dispatch(getSingleData());
    // }, [product.length, dispatch]);

    // useEffect(() => {
    //     if (id) {
    //         const currentproduct = product.find((elem) => elem._id === id);
    //         currentproduct && setCurrprod(currentproduct);
    //         setPrice(currprod.Price);
    //     }
    // }, [id, product]);

    // const handleWishListItem = (payload) => {
    //     const token = localStorage.getItem("token");
    //     axios
    //         .post("https://stark-lake-19402.herokuapp.com/wishlist/create", payload, {
    //             headers: {
    //                 token: "Bearer " + token,
    //                 "Content-Type": "application/json",
    //             },
    //         })
    //         .then((res) => {
    //             console.log(res.data);
    //         })
    //         .catch((err) => console.log(err));
    //     setActive(!active);
    // };


    // const addtowish = (currprod) => {
    //     const { _id, Price, Image, Title } = currprod;
    //     axios
    //         .post(`https://stark-lake-19402.herokuapp.com/wishlist/create`, { id: _id, Price, Image, Title })
    //         .then((res) => {
    //             console.log(res.data);
    //             alert("Item successfully added to wishlist")
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //     setActive(!active);
    // };


    // const removetowish = (currprod) => {
    //     const { _id } = currprod;
    //     axios
    //         .delete(`https://stark-lake-19402.herokuapp.com/wishlist/${_id}/delete`)
    //         .then((res) => {
    //             console.log(res.data);
    //             alert("Item successfully removed from wishlist")
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //     setActive(!active);
    // };


    return (
        <>



            <Box w="100%" >
                {/* <Box
                        w="100%"
                        h="40px"
                        bg="rgb(215,235,242)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text fontSize="12px" fontWeight="400" color="gray">
                            Free Samples With All Orders
                        </Text>
                    </Box> */}

                {/* BreadBrumbs */}

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

                <Grid
                    w="90%"
                    h={{ base: "200px", md: "400px", lg: "500px" }}
                    m="auto"
                    mt="8"
                    gap="8"
                    templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
                >
                    <GridItem
                        w={{ base: "50%", md: "60%", lg: "100%" }}
                        m={{ base: "auto", lg: "0" }}
                        h={{ base: "200px", md: "400px", lg: "500px" }}
                    >
                        <Image w="100%" h="100%" src=/*{currprod.Image}*/ "https://cdn11.nnnow.com/web-images/large/styles/8V1ZDUHUDR0/1533201155000/1.jpg" />
                    </GridItem>

                    <GridItem w="100%" h="500px" display="flex" flexDirection="column">
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            w="100%"
                            p="4"
                            h="7%"
                            flexWrap="wrap"
                            alignItems="center"
                        >
                            <Text color="gray.800" fontSize={{ base: "sm", lg: "lg" }}>
                                {/* {currprod.Brand} */}
                            </Text>
                            <Box display="flex" alignItems="center">
                                <Text mr="4" color="gray">
                                    Ratings
                                </Text>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                            </Box>
                        </Box>

                        <Box pl="4" mt="4">
                            <Text fontSize="xl" color="gray.600">
                                {/* {currprod.Title} */}
                            </Text>
                        </Box>

                        <Box pl="4">
                            <Text fontSize="10px" fontWeight="semibold" color="gray.600">
                                NEW LIMITED EDITION
                            </Text>
                        </Box>

                        <Box
                            pl="4"
                            display="flex"
                            w={{ base: "100%", lg: "70%" }}
                            h="7%"
                            alignItems="center"
                        >
                            <Text
                                fontSize={{ base: "md", lg: "xl" }}
                                mt="4"
                                fontWeight="semibold"
                                color="gray.600"
                            >
                                {/* $ {currprod.Price} */}
                            </Text>
                            <Text fontSize="xsm" mt="4" ml="4" color="gray.600">
                                {" "}
                                4 interest-free payments of $12.50 with
                            </Text>
                            <Text
                                fontSize="xsm"
                                mt="4"
                                ml="1"
                                textDecoration="underline"
                                fontWeight="semibold"
                                color="rgb(18,40,76)"
                            >
                                Klarna.
                            </Text>
                        </Box>

                        <Box pl="4" mt="5">
                            <Text>{"currprod.Description"}</Text>
                        </Box>

                        <Box
                            display="flex"
                            w="100%"
                            h="70px"
                            pl="4"
                            mt="6 "
                            alignItems="center"
                        >
                            <Box
                                bg="#ff3399"
                                h="80%"
                                w="70%"
                                display="flex"
                                justifyItems="center"
                                alignItems="center"
                                justifyContent="space-between"
                                pl="4"
                                pr="4"
                                cursor="pointer"
                            /*onClick={() => handleAddToCart(currprod)}*/
                            >

                                {/* <Box color="white">
                                            <BsFillBagPlusFill size="20" />
                                        </Box> */}
                                <Text color="white" ml="15" fontWeight="bold">
                                    ADD TO BAG
                                </Text>


                            </Box>




                            <Box
                                h="90%"
                                w="20%"
                                display="flex"
                                alignItems="center"
                                cursor="pointer"
                            //onClick={() => handleWishListItem(currprod)}
                            >
                                {/* {active ? (
                                        <AiFillHeart onClick={() => removetowish(currprod)} style={{ width: "50%", height: "50%" }} />
                                    ) : (
                                        <RiHeartAddLine onClick={() => addtowish(currprod)} style={{ width: "50%", height: "50%" }} />
                                    )} */}
                            </Box>
                        </Box>
                        <Box>
                            <Image src="https://static.nnnow.com/client/assets/images/pdp/pdp_desktop_1.jpg" />
                        </Box>

                        <Box>
                            <Text>DELIVERY/STORE OPTIONS :</Text>
                            <Text>Enter your pincode to view delivery & store options</Text>
                            <Input htmlSize={6} size='sm' width='auto' placeholder='PinCode' />
                            <Button size='sm'>CHECK</Button>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>

            <div className={Styles.background}>fkkf;l;sl'sd Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati neque corrupti maiores. Ipsa natus, repellendus autem quia voluptates possimus culpa, at fuga reprehenderit ex iure, vel dolore animi eaque in voluptate laboriosam odit accusamus!</div>

            <Box border="1px solid black">
                <Box display="flex">
                    <Box cursor="pointer" bg={finerdetails ? "white" : "black"} color={finerdetails ? "black" : "white"} onClick={() => {
                        setFinerdetails(true);
                        setAboutsephora(false);
                        setReturnexchange(false)
                    }}>
                        <Text>THE FINER DETAILS</Text>

                    </Box>
                    <Box cursor="pointer" bg={aboutsephora ? "white" : "black"} color={aboutsephora ? "black" : "white"} onClick={() => {
                        setFinerdetails(false);
                        setAboutsephora(true);
                        setReturnexchange(false)
                    }}>
                        <Text>ABOUT SEPHORA COLLECTION</Text>
                    </Box>
                    <Box cursor="pointer" bg={returnexchange ? "white" : "black"} color={returnexchange ? "black" : "white"} onClick={() => {
                        setFinerdetails(false);
                        setAboutsephora(false);
                        setReturnexchange(true)
                    }}>
                        <Text>RETURN & EXCHANGES</Text>
                    </Box>
                </Box>


                {
                    finerdetails && <Box overflow="auto" w="100%">
                        What it is
                        A mineral-based pressed powder foundation.
                        What it does
                        This silky foundation provides buildable coverage and protects skin with an SPF 10, while the long-wearing formula creates a luminous finish.
                        What it is formulated without
                        Parabens, fragrances and talc
                        What else you need to know
                        Tested in order to minimize the risk of allergy.
                        This mineral foundation is talc-free, paraben-free, fragrance-free, oil-free, and noncomedogenic.
                        The "R" and the "D" in the shade name reflects Sephora's French background. The "R" stands for Rose (pink) and is for those with cool undertones. The "D" stands for Dore (gold) and is for those with warm or yellow undertones.
                        Suggested usage
                        1. Press the powder onto all areas of the face.
                        2. For smaller or narrow areas such as around the eyes or the nose, fold the puff in half and apply powder with gentle moves.
                        3. Dust off excess powder for the face to feel smooth and dry
                        4. Use the dual-sided sponge to achieve your desired look: the fuzzy white side for light coverage, or the black spongy side for full coverage
                    </Box>
                }
                {
                    aboutsephora && <Box w="100%">
                        Sephora has earned its reputation as a beauty trailblazer with its expertise, innovation, and entrepreneurial spirit. Owned by LVMH Moët Hennessy Louis Vuitton, the world's leading luxury goods group, Sephora’s revolutionary beauty-retail concept features an ever-increasing assortment of products from carefully curated brands, indie darlings, trusted classics, and Sephora’s own, SEPHORA COLLECTION.
                    </Box>
                }

                {
                    returnexchange && <Box w="500px">
                        This item can’t be returned — our Returns Policy doesn’t cover innerwear, lingerie, fragrances and beauty products.
                    </Box>
                }
            </Box>



            {/* <Image src="https://cdn18.nnnow.com/web-images/large/styles/2V6VPH7HE7G/1495518987823/1.jpg" /> */}


        </>
    );
};

export default SingleProduct;

