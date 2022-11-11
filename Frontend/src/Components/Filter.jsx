import {
  Box,
  Button,
  Divider,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  Menu,
  Checkbox,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Products } from "./Pages/Products";
import { useSelector } from "react-redux";

export const Filter = ({ setVal }) => {
  const products = useSelector((state) => state.products);
  // console.log(products);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrandFilter = searchParams.getAll("brand");
  const initialCategoryFilter = searchParams.getAll("category");
  const initialPriceFilter = searchParams.getAll("price");
  const initialSortBy = searchParams.getAll("sortBy");
  const [brand, setBrand] = useState(initialBrandFilter || []);
  const [category, setCategory] = useState(initialCategoryFilter || []);
  const [price, setPrice] = useState(initialPriceFilter || []);
  const [sortBy, setSortBy] = useState(initialSortBy[0] || "");

  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [val3, setVal3] = useState(0);
  const [val4, setVal4] = useState(0);
  const [val5, setVal5] = useState(0);

  //Category
  const handleCategoryCheckbox = (e) => {
    const newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  //Brand
  const handleBrandCheckbox = (e) => {
    const newBrand = [...brand];
    if (newBrand.includes(e.target.value)) {
      newBrand.splice(newBrand.indexOf(e.target.value), 1);
    } else {
      newBrand.push(e.target.value);
    }
    setBrand(newBrand);
  };

  //Price
  const handlePriceCheckbox = (e) => {
    const newPrice = [...price];
    if (newPrice.includes(e.target.value)) {
      newPrice.splice(newPrice.indexOf(e.target.value), 1);
    } else {
      newPrice.push(e.target.value);
    }
    setPrice(newPrice);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };
 // console.log("SortBy", sortBy);

  // }

  // const filterProd = (a,b) =>{
  //   let data=products.filter((x,y)=>x.price>=a||y.price<b)
  //   console.log(data)

  // }

  //sorting
  // {

  // Price
  // const handlePriceCheckBox = (e) => {
  //   const val = e.target.value;
  //   console.log(val);
  //   const j = products.map((el) => {
  //     if (e.target.value(Number) < el.price) {
  //       return el.price;
  //     }
  //     console.log(j);
  //   });
  // };

  useEffect(() => {
    if (brand && category && sortBy) {
      let params = {};
      brand && (params.brand = brand);
      category && (params.category = category);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
    }
  }, [brand, category,sortBy ,searchParams]);
  //console.log(brand)
  return (
    <Box margin="1px solid black" m="10" h="auto" w={"80"} textAlign={"center"}>
      <Text fontSize={"xl"}>CATEGORY</Text>
      <VStack onChange={handleCategoryCheckbox}>
        <Box>
          <input
            type="checkbox"
            value="pencil"
            checked={category.includes("pencil")}
          />
          Pencil
        </Box>
        <Box>
          {" "}
          <input
            type="checkbox"
            value="lipstick"
            checked={category.includes("lipstick")}
          />
          Lipstick
        </Box>
        <Box>
          {" "}
          <input
            type="checkbox"
            value="concealer"
            checked={category.includes("concealer")}
          />
          Concealer
        </Box>
        <Box>
          <input
            type="checkbox"
            value="powder"
            checked={category.includes("powder")}
          />
          Powder
        </Box>
        <Box>
          {" "}
          <input
            type="checkbox"
            value="highlighter"
            checked={category.includes("highlighter")}
          />
          High Lighter
        </Box>
        <Box>
          {" "}
          <input
            type="checkbox"
            value="cream"
            checked={category.includes("cream")}
          />
          Cream
        </Box>
        <Box>
          {" "}
          <input
            type="checkbox"
            value="gel"
            checked={category.includes("gel")}
          />
          Gel
        </Box>
        <Box>
          {" "}
          <input
            type="checkbox"
            value="liquid"
            checked={category.includes("liquid")}
          />
          Liquid
        </Box>
        <Box>
          {" "}
          <input
            type="checkbox"
            value="bb_cc"
            checked={category.includes("bb_cc")}
          />
          BB_CC
        </Box>
        <Box>
          {" "}
          <input
            type="checkbox"
            value="palette"
            checked={category.includes("palette")}
          />
          Palette
        </Box>
        <Box>
          {" "}
          <input
            type="checkbox"
            value="contour"
            checked={category.includes("contour")}
          />
          Contour
        </Box>
        <Box>
          {" "}
          <input
            type="checkbox"
            value="lip_gloss"
            checked={category.includes("lip_gloss")}
          />
          Lip Gloss
        </Box>
        <Box>
          {" "}
          <input
            type="checkbox"
            value="lip_stain"
            checked={category.includes("lip_stain")}
          />
          Lip Stain
        </Box>
        <Box>
          {" "}
          <input
            type="checkbox"
            value="mineral"
            checked={category.includes("mineral")}
          />
          Mineral
        </Box>
      </VStack>
      <Divider />
      <Box p={4}>
        <Text fontSize={"xl"}>FILTER BY</Text>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronRightIcon />}>
            BRANDS
          </MenuButton>
          <MenuList>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="colourpop"
                checked={brand.includes("colourpop")}
              />{" "}
              Colourpop
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="glossier"
                checked={brand.includes("glossier")}
              />{" "}
              Glossier
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="nyx"
                checked={brand.includes("nyx")}
              />
              Nyx{" "}
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="clinique"
                checked={brand.includes("clinique")}
              />{" "}
              Clinique
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="dior"
                checked={brand.includes("dior")}
              />{" "}
              Dior
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="smashbox"
                checked={brand.includes("smashbox")}
              />{" "}
              Smashbox
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="marcelle"
                checked={brand.includes("marcelle")}
              />{" "}
              Marcelle
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="stila"
                checked={brand.includes("stila")}
              />{" "}
              Stila
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="mineral fusion"
                checked={brand.includes("mineral fusion")}
              />{" "}
              Mineral Fusion
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="annabelle"
                checked={brand.includes("annabelle")}
              />{" "}
              Annabelle
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="dr. hauschka"
                checked={brand.includes("dr. hauschka")}
              />{" "}
              Dr.Hauschka
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="physicians formula"
                checked={brand.includes("physicians formula")}
              />{" "}
              Physicains Formula
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="cargo cosmetics"
                checked={brand.includes("cargo cosmetics")}
              />{" "}
              Cargo Cosmetics
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="covergirl"
                checked={brand.includes("covergirl")}
              />{" "}
              Covergirl
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="e.l.f"
                checked={brand.includes("e.l.f")}
              />{" "}
              E.L.F
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="maybelline"
                checked={brand.includes("maybelline")}
              />{" "}
              Maybelline
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="almay"
                checked={brand.includes("almay")}
              />{" "}
              Almay
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="sante"
                checked={brand.includes("sante")}
              />{" "}
              Sante
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="revlon"
                checked={brand.includes("revlon")}
              />{" "}
              Revlon
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="l'oreal"
                checked={brand.includes("l'oreal")}
              />{" "}
              L'oreal
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="stila"
                checked={brand.includes("stila")}
              />{" "}
              Stila
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="milani"
                checked={brand.includes("milani")}
              />{" "}
              Milani
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="pure anada"
                checked={brand.includes("pure anada")}
              />{" "}
              Pure anada
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="wet n wild"
                checked={brand.includes("wet n wild")}
              />{" "}
              Wet n Wild
            </MenuItem>
            <MenuItem>
              <input
                type="checkbox"
                onChange={handleBrandCheckbox}
                value="pacifica"
                checked={brand.includes("pacifica")}
              />{" "}
              Pacifica
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      {/* Price */}

      <Box p={4}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronRightIcon />}>
            Price
          </MenuButton>
          <MenuList>
            <MenuItem>
              <input type="checkbox" onClick={() => setVal(0, 2000)} /> Below
              Rs. 1999
            </MenuItem>
            <MenuItem>
              <input type="checkbox" onClick={() => setVal(2000, 3000)} />{" "}
              Rs.2000 - Rs. 2999
            </MenuItem>
            <MenuItem>
              <input type="checkbox" onClick={() => setVal(3500, 3500)} />
              Rs.3000 - Rs. 3499{" "}
            </MenuItem>
            <MenuItem>
              <input type="checkbox" onClick={() => setVal(3500, 4000)} />{" "}
              Rs.3500 - Rs. 3999
            </MenuItem>
            <MenuItem>
              <input type="checkbox" onClick={() => setVal(4000, Infinity)} />{" "}
              Above Rs.4000
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      {/* Sort high to low */}
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronRightIcon />}>
            Sort
          </MenuButton>
          <MenuList onClick={handleSort}>
            <MenuItem value="asc" name="sortBy" defaultChecked={sortBy === "asc"}>
              Low to Hight
            </MenuItem>
            <MenuItem value="desc" name="sortBy" defaultChecked={sortBy === "desc"}>
              High to Low
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};
