import { Button, Heading, HStack, Img, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <HStack
      wrap={"wrap"}
      w={"container.xl"}
      justifyContent={"center"}
      gap={"2rem"}
    >
      {products.map((product) => (
        <VStack
          w={"52"}
          border="1px"
          borderColor="gray.200"
          borderRadius={"20px"}
          justifyContent="center"
          alignItems={"center"}
          p={"1rem"}
        >
          <Img h={"20"} src={product.image} />
          <Text noOfLines={1}>{product.title}</Text>
          <Heading size={"md"} noOfLines={1}>
            ${product.price}
          </Heading>
          <Button colorScheme="teal" size="sm">
            Add to Cart
          </Button>
        </VStack>
      ))}
    </HStack>
  );
};

export default Products;
