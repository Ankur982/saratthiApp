import React, { useEffect } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Select,
  Textarea,
} from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createuser } from "../../redux/action";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState(0);
  const [dob, setDob] = useState("");
  const [profileImg, setProfileImg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((store) => store);

  const handleAddTicket = async (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      email: email,
      phoneno: phoneno,
      dob: dob,
      profileImg: profileImg,
    };

    dispatch(createuser(newUser));

    alert("User created successfully")
  };

  return (
    <Box>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
          width={"700px"}
        >
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>CREATE TICKETS</Heading>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <form method="POST" onSubmit={(e) => handleAddTicket(e)}>
              <Stack spacing={4}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                  />
                </FormControl>

                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                  />
                </FormControl>

                <FormControl id="phoneno">
                  <FormLabel>Phoneno</FormLabel>
                  <Input
                    onChange={(e) => setPhoneno(e.target.value)}
                    type="text"
                  />
                </FormControl>

                <FormControl id="dob">
                  <FormLabel>Dob</FormLabel>
                  <Input
                    placeholder="Select Date and Time"
                    type="datetime-local"
                    onChange={(e) => setDob(e.target.value)}
                  />
                </FormControl>

                <FormControl id="profileImg">
                  <FormLabel>ProfileImg</FormLabel>
                  <Input
                    onChange={(e) => setProfileImg(e.target.value)}
                    type="text"
                  />
                </FormControl>


                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  ></Stack>
                  <Button
                    bg={"black"}
                    color={"white"}
                    type="submit"
                    _hover={{
                      bg: "grey",
                    }}
                  >
                    CREATE USER
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};
