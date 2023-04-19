import React from "react";
import { Box } from "@chakra-ui/react";
import B from "./B";

export default function A() {
  return (
    <>
      <Box w={100} h={100} bgColor="red.500">
        A
      </Box>
      <B />
    </>
  );
}
