import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function ImageWithText({ reverse, image, heading, text}) {
  const reverseSection = reverse ? "row-reverse" : "row";
  return (
    <Box>
      <Flex direction={["column", reverseSection]} w="100%">
        <Image src={image} w={["100%", "50%"]} objectFit="cover"></Image>
        <Flex
          w={["100%", "50%"]}
          direction="column"
          justify="center"
          align="center"
          p="2rem"
        >
          <Heading p={5}>{heading}</Heading>
          <Text >{text}</Text>
          {/* <Button w='10rem'>
            Shop Now
          </Button> */}
          <Button mt={5} w="10rem" bgColor='#E8DFCA' _hover={{opacity:"50%", bgColor:'#1A4D2E' ,color:"#E8DFCA",border:"none"}}>
            Shop Now
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ImageWithText;
