import { Button, Heading, HStack, Img, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        console.log(data);
      };
      fetchProducts();
    } catch (error) {
      console.log("error While fetching data");
    }
  }, []);

  console.log(products);

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({
      type: "addToCart",
      payload: options,
    });
    dispatch({
      type: "calculatePrice",
    });
    toast.success("Added to Cart");
  };

  return (
    <HStack
      wrap={"wrap"}
      w={"container.xl"}
      justifyContent={"center"}
      gap={"2rem"}
    >
      {products.map((product) => {
        product.quantity = 1;
        return (
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
            <Button
              colorScheme="teal"
              size="sm"
              onClick={() => addToCartHandler(product)}
            >
              Add to Cart
            </Button>
          </VStack>
        );
      })}
    </HStack>
  );
};

export default Products;
