import React, { useContext } from "react";
import { Box, Button } from "@chakra-ui/react";
import { AppContext } from "src/App";
import D from "./D";

export default function C() {
  const { count, setCount } = useContext(AppContext);

  return (
    <>
      <Box w={100} h={100} bgColor="green.500">
        {count}
        <Button ml={"4"} onClick={() => setCount(count + 1)}>
          +
        </Button>
      </Box>
      <Box>
        <D />
      </Box>
    </>
  );
}
