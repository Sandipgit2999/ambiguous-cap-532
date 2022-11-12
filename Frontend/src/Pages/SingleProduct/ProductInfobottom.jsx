import React, { useState } from "react";
import axios from "axios";
import {
    Box,
    Text,
    Grid,
    GridItem,

} from "@chakra-ui/react";



const ProductInfobottom = () => {

    const [finerdetails, setFinerdetails] = useState(true);
    const [aboutsephora, setAboutsephora] = useState(false)
    const [returnexchange, setReturnexchange] = useState(false)
    return (
        <><Grid bg="red" backgroundImage="https://cdn11.nnnow.com/web-images/large/styles/8V1ZDUHUDR0/1533201155000/1.jpg" w="95%"
            h={{ base: "200px", md: "400px", lg: "500px" }}
            m="auto"
            mt="8"
            gap="8"
            mb="8"
        >

            <GridItem justifyContent="center" alignItems="center" width="80%">
                <Box display="flex" ml="8%" width="70%" justifyContent="space-between">
                    <Box cursor="pointer" padding="8px" bg={finerdetails ? "white" : "black"} color={finerdetails ? "black" : "white"} onClick={() => {
                        setFinerdetails(true);
                        setAboutsephora(false);
                        setReturnexchange(false)
                    }}>
                        <Text>THE FINER DETAILS</Text>

                    </Box>
                    <Box cursor="pointer" padding="8px" bg={aboutsephora ? "white" : "black"} color={aboutsephora ? "black" : "white"} onClick={() => {
                        setFinerdetails(false);
                        setAboutsephora(true);
                        setReturnexchange(false)
                    }}>
                        <Text>ABOUT SEPHORA COLLECTION</Text>
                    </Box>
                    <Box cursor="pointer" padding="8px" bg={returnexchange ? "white" : "black"} color={returnexchange ? "black" : "white"} onClick={() => {
                        setFinerdetails(false);
                        setAboutsephora(false);
                        setReturnexchange(true)
                    }}>
                        <Text>RETURN & EXCHANGES</Text>
                    </Box>
                </Box>

                <Box ml="8%" >

                    {
                        finerdetails && <Box overflow="auto" w="100%" h="200px" bg="white">
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
                        aboutsephora && <Box w="100%" h="200px" bg="white">
                            Sephora has earned its reputation as a beauty trailblazer with its expertise, innovation, and entrepreneurial spirit. Owned by LVMH Moët Hennessy Louis Vuitton, the world's leading luxury goods group, Sephora’s revolutionary beauty-retail concept features an ever-increasing assortment of products from carefully curated brands, indie darlings, trusted classics, and Sephora’s own, SEPHORA COLLECTION.
                        </Box>
                    }

                    {
                        returnexchange && <Box w="100%" h="200px" bg="white">
                            This item can’t be returned — our Returns Policy doesn’t cover innerwear, lingerie, fragrances and beauty products.
                        </Box>
                    }
                </Box>
            </GridItem>
        </Grid></>
    )
}

export default ProductInfobottom