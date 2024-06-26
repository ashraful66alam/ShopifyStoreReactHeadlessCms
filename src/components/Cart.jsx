import React, { useContext } from "react";

import { ShopContext } from "../context/ShopContext";
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
  Link,
  Box,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
export default function Cart() {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(ShopContext);

  return (
    <Drawer isOpen={isCartOpen} placement="right" onClose={closeCart} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your Shopping Cart</DrawerHeader>

        <DrawerBody>
          {checkout.lineItems?.length ? (
            checkout.lineItems.map((item) => (
              <Grid templateColumns="repeat(4,1fr)" key={item.id} pb="35px">
                {/* <Text>{item.title}</Text> */}
                <Flex align="center" justify="center">
                  <CloseIcon
                    boxSize={3}
                    color="red.500"
                    cursor="pointer"
                    onClick={() => {
                      removeLineItem(item.id);
                    }}
                  ></CloseIcon>
                </Flex>
                <Flex align="center" justify="center">
                  <Image src={item.variant.image.src}></Image>
                </Flex>
                <Flex align="center" justify="center">
                  <Text textAlign="Center">{item.title}</Text>
                </Flex>
                <Flex align="center" justify="center">
                  <Text textAlign="Center">{item.variant.price.amount}</Text>
                </Flex>
              </Grid>
            ))
          ) : (
            <Box h="100%" w="100%">
              <Flex h="100%" direction="column" align="center" justify="center">
                <Text>Your Cart Is Empty!</Text>
              </Flex>
            </Box>
          )}
        </DrawerBody>

        {checkout.lineItems?.length ? (
          <DrawerFooter>
            <Button w="100%">
              <Link w="100%" href={checkout.webUrl}>
                Checkout
              </Link>
            </Button>
          </DrawerFooter>
        ) : null}
      </DrawerContent>
    </Drawer>
  );
}
