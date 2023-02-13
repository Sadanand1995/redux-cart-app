import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      paddingX={["5", "10"]}
      h={"12"}
      alignItems={"center"}
      backgroundColor={"blackAlpha.900"}
      color={"whiteAlpha.900"}
    >
      <Text>REDUX STORE</Text>
      <HStack gap={"6"}>
        <Link to="/">Home</Link>
        <Link to="/cart">
          <FaShoppingCart size={"23"} />
          <Text
            backgroundColor={"whiteAlpha.900"}
            color={"blackAlpha.700"}
            w={"5"}
            h={"5"}
            display={"flex"}
            pos={"absolute"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"full"}
            transform={"translate(80%, -80%)"}
          >
            {0}
          </Text>
        </Link>
      </HStack>
    </HStack>
  );
};

export default Navbar;
