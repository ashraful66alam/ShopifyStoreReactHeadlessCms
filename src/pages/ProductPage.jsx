import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import NavMenu from "../components/NavMenu";

const ProductPage = () => {
  const { fetchProductWithHandle, product, addItemToCheckout } =
    useContext(ShopContext);

  const { handle } = useParams();

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) {
    return <div>loading......</div>;
  }
  return (
    <>
      <Navbar></Navbar>
      <NavMenu></NavMenu>
      <Box p="2rem" h='100vh'>
        <Grid templateColumns={["repeat(1,1fr)", "repeat(2,1fr)"]} m="auto" >
          <Flex align="center" justify="center"> 
            <Image src={product.images[0].src} />
          </Flex>
          <Flex direction="column" align="center" justify="center" px="2rem">
            <Heading pb="2rem" color="#1A4D2E">{product.title}</Heading>
            <Text fontWeight="bold" pb="2rem" color="#4F6F52">{product.variants[0].price.amount}</Text>
            <Text pb="2rem" color="#4F6F52">{product.description}</Text>

            <Button
              onClick={() => {
                addItemToCheckout(product.variants[0].id, 1);
              }}
              _hover={{
                opacity:'70%',
                color:'#F5EFE6',
                backgroundColor:"#4F6F52",
                border:'unset'
            }}
              w="10rem"
              color="#1A4D2E"
            >
              Add to cart
            </Button>
          </Flex>
        </Grid>
      </Box>
    </>
  );
};

export default ProductPage;
