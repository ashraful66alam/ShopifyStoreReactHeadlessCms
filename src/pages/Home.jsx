import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  console.log(products);
  if (!products) {
    return <div>loading......</div>;
  }

  return (
    <Box>
      <Grid templateColumns="repeat(4,1fr)" gap={4}>
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box _hover={{opacity:'80%'}} textAlign='center'>
              <Image src={product.images[0].src} />
              <Text>{product.title}</Text>
              <Text>{product.variants[0].price.amount}</Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
