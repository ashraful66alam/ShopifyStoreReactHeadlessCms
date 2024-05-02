import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Flex, Box, Icon, Image, Text, Badge } from "@chakra-ui/react";
import { MdMenu, MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { openCart, OpenMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      backgroundColor="#1A4D2E"
      direction="row"
      justify="space-between"
      p="1rem"
      align="center"
      w="100vw"
    >
      <Icon
        onClick={() => {
          OpenMenu();
        }}
        fill="white"
        cursor="pointer"
        as={MdMenu}
        w={30}
        h={30}
      ></Icon>

      <Link to={`/`}>
        <Image src="/Nocturnal.png" w={100} />
      </Link>

      <Box>
        <Icon
          onClick={() => {
            openCart();
          }}
          fill="white"
          cursor="pointer"
          as={MdShoppingBasket}
          w={30}
          h={30}
        >
          Cart
        </Icon>
        <Badge backgroundColor="E8DFCA" borderRadius="50%">{checkout.lineItems?.length}</Badge>
      </Box>
    </Flex>
  );
}
