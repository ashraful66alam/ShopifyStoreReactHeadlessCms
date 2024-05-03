import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";

function RichText({ heading, text }) {
  return (
    <Box p="1rem">
      <Center display="flex" flexDir="column" textAlign="center">
        <Heading py="2.5rem">{heading}</Heading>
        <Text py='2rem'>{text}</Text>
      </Center>
    </Box>
  );
}

export default RichText;
