import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box
      bg={"teal"}
      color="grey"
      display={"flex"}
      justifyContent="space-around"
      fontSize={25}
      boxShadow={"lg"}
      p="5"
    >
      <Link to="/">
        <Text>Saratthi Mobility</Text>
      </Link>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="/create">
        <Text>Create</Text>
      </Link>
    </Box>
  );
};
