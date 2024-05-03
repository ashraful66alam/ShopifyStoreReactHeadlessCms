import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ImageWithText from "../components/ImageWithText";
import RichText from "../components/RichText";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  // console.log(products);
  if (!products) {
    return <div>loading......</div>;
  }

  return (
    <>
      <Navbar></Navbar>
      <NavMenu></NavMenu>
      <Hero></Hero>
      <RichText heading="This Is Nocturnal" text='A shopify frontend made with react'></RichText>
      <Box mb={10}>
        <Grid templateColumns="repeat(4,1fr)" gap={2}>
          {products.map((product) => (
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Box _hover={{ opacity: "80%" }} textAlign="center" position='relative'>
                <Image src={product.images[0].src} maxH="240px" />
                <Text color="#1A4D2E" position='absolute' bottom="15%" w="100%" fontWeight='bold'>{product.title}</Text>
                <Text color="#4F6F52" position='absolute' bottom="5%" w="100%">{product.variants[0].price.amount}</Text>
              </Box>
            </Link>
          ))}
        </Grid>
      </Box>
      <RichText heading="Looks soothing" text='Designed with Chakra Ui'></RichText>

      <ImageWithText reverse={true} image='/Broad1.jpg' heading="Ready" text='Hold the camera !' ></ImageWithText>
      <ImageWithText reverse={false} image='/Broad2.jpg' heading="Steady" text="Get The Focus !" ></ImageWithText>
      <ImageWithText reverse={true} image='/Broad3.jpg'heading="Go" text='Capture with perfection !' ></ImageWithText>
      <Footer></Footer>
    </>
  );
};

export default Home;
