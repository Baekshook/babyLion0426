import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { createContext, useState } from "react";
import A from "@components/A";

export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [names, setNames] = useState([]);

  function handleAddNames(option) {
    if (!option) {
      alert("값을 입력하세요!");
    } else {
      setNames([...names, "  " + option]);
    }
  }

  return (
    <>
      <ChakraProvider>
        <AppContext.Provider value={{ count, setCount, names, handleAddNames }}>
          <Box bgColor={"blue.100"}>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
              mt={"120px"}
            >
              <Box mt={"30px"}>Hello, React</Box>
              <A />
            </Flex>
          </Box>
        </AppContext.Provider>
      </ChakraProvider>
    </>
  );
}

export default App;
