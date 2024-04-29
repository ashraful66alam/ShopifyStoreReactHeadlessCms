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
    <Box>
      <Grid templateColumns="repeat(2,1fr)" gap={5}>
        <Image src={product.images[0].src} />
        <Box>
          <Heading color="#1A4D2E">{product.title}</Heading>
          <Text color="#4F6F52">{product.variants[0].price.amount}</Text>
          <Text color="#4F6F52">{product.description}</Text>

          <Button
            onClick={() => {
              addItemToCheckout(product.variants[0].id, 1);
            }}
          >
            Add to cart
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default ProductPage;
