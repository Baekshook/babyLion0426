import { ChakraProvider, Box } from "@chakra-ui/react";
import { useState } from "react";
import A from "@components/A";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChakraProvider>
        <Box bgColor={"blue.100"}>
          <Box mt={"30px"}>Hello, React</Box>
          <A count={count} setCount={setCount} />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
