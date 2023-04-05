import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);

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
            color={"black"}
            fontWeight={"bold"}
            w={"5"}
            h={"5"}
            display={"flex"}
            pos={"absolute"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"full"}
            transform={"translate(80%, -80%)"}
          >
            {cartItems.length}
          </Text>
        </Link>
      </HStack>
    </HStack>
  );
};

export default Navbar;
