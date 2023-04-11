import React from "react";
import { Box, Button } from "@chakra-ui/react";

export default function C({ count, setCount }) {
  return (
    <Box w={100} h={100} bgColor="green.500">
      {count}
      <Button ml={"4"} onClick={() => setCount(count + 1)}>
        +
      </Button>
    </Box>
  );
}
