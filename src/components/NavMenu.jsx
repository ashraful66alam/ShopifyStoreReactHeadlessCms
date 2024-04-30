import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { VStack, StackDivider } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  Flex,
  Text,
  Icon,
  Image,
  Box,
} from "@chakra-ui/react";

function NavMenu() {
  const { isMenuOpen, closeMenu } = useContext(ShopContext);
  return (
    <Box>
      <Drawer
        isOpen={isMenuOpen}
        placement="left"
        onClose={closeMenu}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
            >
              <Link to={"/"} h="40px">About Us</Link>
              <Link to={"/"} h="40px">Learn More</Link>
              <Link to={"/"} h="40px">FAQ</Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Text w="100%">Copyright : Ashraful Alam</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default NavMenu;
