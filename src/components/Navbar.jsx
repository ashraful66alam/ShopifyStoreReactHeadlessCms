import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Flex, Box, Icon, Image, Text } from "@chakra-ui/react";
import { MdMenu,MdShoppingBasket } from "react-icons/md";


export default function Navbar() {
  const { openCart, OpenMenu, checkout } = useContext(ShopContext);

  return (
    <Flex backgroundColor="#1A4D2E"   direction="row" justify="space-between" p="1rem" mb="1rem" align="center" w='100vw'>
      <Icon fill='white' cursor='pointer' as={MdMenu} w={30} h={30}></Icon>
      <Image src="/Nocturnal.png" w={100}/> 
      {/* <img src="/A.png" alt="image" /> */}
      <Icon onClick={()=>{openCart()}} fill='white' cursor='pointer' as={MdShoppingBasket}  w={30} h={30}>Cart</Icon>
    </Flex>
  );
} 
