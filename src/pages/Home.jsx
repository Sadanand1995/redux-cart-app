import { Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <VStack>
      <Heading m={"2rem"}>Welcome to Redux Toolkit Store</Heading>
      <HStack>
        <Products />
      </HStack>
    </VStack>
  );
};

export default Home;
