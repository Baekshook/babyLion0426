import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { createContext, useState } from "react";
import D from "@components/D";
import E from "@components/E";
import theme from "./theme";
import Fonts from "./font";

export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [names, setNames] = useState([]);

  function handleAddNames(option) {
    if (option === "") {
      alert("값을 입력해 주세요!");
    } else if (names.length === 0) {
      setNames([option]);
    } else {
      setNames([...names, "," + option]);
    }
  }

  function removeName() {
    setNames(names.slice(0, names.length - 1));
  }

  return (
    <>
      <ChakraProvider theme={theme}>
        <Fonts />
        <AppContext.Provider
          value={{ count, setCount, names, handleAddNames, removeName }}
        >
          <Box bgColor={"blue.100"}>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
              mt={"120px"}
            >
              <Box mt={"30px"} fontFamily={"PyeongChangPeace-Bold"}>
                Hello, React
              </Box>
             <D />
            </Flex>
          </Box>
          <E />
        </AppContext.Provider>
      </ChakraProvider>
    </>
  );
}

export default App;
