import { Box, Button, Divider, MenuButton, MenuItem, MenuList, VStack,Menu } from "@chakra-ui/react";
import React from "react";
import { Text } from "@chakra-ui/react";
import { ChevronRightIcon} from '@chakra-ui/icons'
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const Filter = () => {
   
  const [searchParams,setSearchParams]= useSearchParams()
  const initialBrandFilter = searchParams.getAll("brand");
  console.log(initialBrandFilter)
  const [brand,setBrand]= useState(initialBrandFilter || [])

  const handleBrandCheckbox =(e)=>{
    const newBrand = [...brand];
    if(newBrand.includes(e.target.value)){
      newBrand.splice(newBrand.indexOf(e.target.value),1);
    }else{
      newBrand.push(e.target.value);
    }
    setBrand(newBrand)
  }

  useEffect(()=>{
    if(brand){
      let params={};
      brand && (params.brand = brand);
      setSearchParams(params)
    }
  },[brand,searchParams])
  //console.log(brand)
  return (
    <Box bg="AppWorkspace" m="10" h="auto" w={"80"} textAlign={"center"}>
      <Text fontSize={"xl"}>CATEGORY</Text>
      <VStack>
        <div>
        <div>
          <input type="checkbox" />
          <label>Pencil</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Lipstick</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Concealer</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Powder</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>High Lighter</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Cream</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Gel</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Liquid</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>BB_CC</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Palette</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Contour</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Lip Gloss</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Lip Stain</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Mineral</label>
        </div>
        </div>
      </VStack>
      <Divider />
      <Box p={4}>
        <Text fontSize={"xl"}>FILTER BY</Text>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronRightIcon />}>
            BRANDS
          </MenuButton>
          <MenuList>
            <MenuItem><input type="checkbox"   onChange={handleBrandCheckbox} value="colourpop" checked={brand.includes("colourpop")}/> Colourpop</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="glossier" checked={brand.includes("glossier")}/> Glossier</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="nyx" checked={brand.includes("nyx")}/>Nyx </MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="clinique" checked={brand.includes("clinique")} /> Clinique</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="dior" checked={brand.includes("dior")}/> Dior</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="smashbox" checked={brand.includes("smashbox")}/> Smashbox</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="marcelle" checked={brand.includes("marcelle")}/> Marcelle</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="stila" checked={brand.includes("stila")}/> Stila</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="mineral fusion" checked={brand.includes("mineral fusion")}/> Mineral Fusion</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="annabelle" checked={brand.includes("annabelle")}/> Annabelle</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="dr. hauschka" checked={brand.includes("dr. hauschka")}/> Dr.Hauschka</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="physicians formula" checked={brand.includes("physicians formula")}/> Physicains Formula</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="cargo cosmetics" checked={brand.includes("cargo cosmetics")}/> Cargo Cosmetics</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="covergirl" checked={brand.includes("covergirl")}/> Covergirl</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="e.l.f" checked={brand.includes("e.l.f")}/> E.L.F</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="maybelline" checked={brand.includes("maybelline")}/> Maybelline</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="almay" checked={brand.includes("almay")}/> Almay</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="sante" checked={brand.includes("sante")}/> Sante</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="revlon" checked={brand.includes("revlon")}/> Revlon</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="l'oreal" checked={brand.includes("l'oreal")}/> L'oreal</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="stila" checked={brand.includes("stila")}/> Stila</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="milani" checked={brand.includes("milani")}/> Milani</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="pure anada" checked={brand.includes("pure anada")}/> Pure anada</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="wet n wild" checked={brand.includes("wet n wild")}/> Wet n Wild</MenuItem>
            <MenuItem><input type="checkbox"  onChange={handleBrandCheckbox} value="pacifica" checked={brand.includes("pacifica")}/> Pacifica</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

// {
//   products.map((item)=>{
//     <input type="checkbox" />
//     return <Text key={item.id}>{item.category}</Text>
//   })
//  }
