import { Button, Input, Box, Flex } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AppContext } from "src/App";

export default function D() {
  const { names, handleAddNames, removeName } = useContext(AppContext);
  const [과일, 과일변경] = useState("");

  const onClickBtn = () => {
    handleAddNames(과일);
    과일변경("");
  };

  return (
    <>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Input
          mt={"20px"}
          ml={"20px"}
          htmlSize={20}
          width="auto"
          placeholder="이름을 입력하세요."
          focusBorderColor="pink.400"
          borderColor="black"
          onChange={(e) => 과일변경(e.target.value)}
          value={과일}
        />
        {/* https://chakra-ui.com/docs/components/input/usage */}
        <Button
          ml={"20px"}
          mt={"20px"}
          onClick={() => {
            onClickBtn(과일);
            //이름은 다시 ''초기화
            과일변경("");
          }}
        >
          추가
        </Button>
        <Button onClick={removeName} mt={"20px"} ml={"20px"}>
          삭제
        </Button>
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Box ml={"30px"} mt={"10px"} mb={"30px"}>
          {names}
        </Box>
      </Flex>
    </>
  );
}
