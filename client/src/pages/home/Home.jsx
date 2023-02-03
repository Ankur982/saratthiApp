import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Heading,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../../redux/action";

export const Home = () => {
  const dispatch = useDispatch();
  const User = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(getuser());
  }, []);

  console.log(User);

  return (
    <Box m={"auto"} >
      <Heading m={"50px,0"} textAlign={"center"}>All Users List</Heading>
      <TableContainer w={"80%"} m={"auto"} border={"4px solid teal"}>
        <Table variant="striped" colorScheme="teal">
          <TableCaption> User List</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phoneno</Th>
              <Th>Dob</Th>
              <Th>ProfileImg</Th>
              <Th>IsActive</Th>
            </Tr>
          </Thead>
          <Tbody>
            {User?.map((e) => (
              <Tr>
                <Td>{e.name}</Td>
                <Td>{e.email}</Td>
                <Td>{e.phoneno}</Td>
                <Td>{e.dob}</Td>
                <Td>
                  <Image
                    boxSize="100px"
                    objectFit="cover"
                    src={e.profileImg}
                    alt="Dan Abramov"
                  />
                </Td>
                <Td>{e.isActive ? "Yes" : "No"}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
