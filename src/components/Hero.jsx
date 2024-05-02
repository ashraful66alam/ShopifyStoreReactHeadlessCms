import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React from "react";

function Hero() {
  return (
    <>
      <Box
        bgGradient="linear(#1A4D2E , white)"
        w="100%"
        position="relative"
        h="70vh"
        mb={10}
      >
        <Image
          src="/hero2Transparent.png"
          h="100%"
          m="auto"
          objectFit="contain"
          objectPosition={["top", "center"]}
        ></Image>
        <Text
          position="absolute"
          bottom="15%"
          w="100%"
          textAlign="center"
          backgroundColor="#1A4D2E"
          bgClip="text"
          fontSize="4rem"
          fontWeight="bold"
        >
          Welcome to Nocturnal
        </Text>
        <Center>
          <Button position="absolute" bottom="10%" w="10rem" bgColor='#E8DFCA' _hover={{opacity:"50%", bgColor:'#1A4D2E' ,color:"#E8DFCA",border:"none"}}>
            Shop Now
          </Button>
        </Center>
      </Box>
    </>
  );
}

export default Hero;
