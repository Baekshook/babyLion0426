import { Button, Input, Box } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AppContext } from "src/App";

export default function D() {
  const { names, handleAddNames } = useContext(AppContext);
  const [과일, 과일변경] = useState("");

  const onClickBtn = () => {
    handleAddNames(과일);
    과일변경("");
  };

  return (
    <>
      <Input
        mt={"20px"}
        ml={"20px"}
        placeholder="이름을 입력하세요."
        width="auto"
        focusBorderColor="pink.400"
        borderColor={"black"}
        onChange={(e) => 과일변경(e.target.value)}
        value={과일}
      />
      <Button onClick={onClickBtn} ml={"20px"}>
        추가
      </Button>
      <Box ml={"30px"} mt={"10px"} mb={"30px"}>
        {names}
      </Box>
    </>
  );
}
