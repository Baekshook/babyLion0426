import { Box, Button, Flex, Input, IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";

export default function E() {
  const [arr, setArr] = useState(["떡볶이", "순대", "튀김", "어묵"]);
  const [menu, setMenu] = useState("");

  function handleAddNames(option) {
    if (option === "") {
      alert("값을 입력해 주세요!");
    } else {
      setArr([...arr, option]);
    }
  }

  const deleteNthValue = (n) => {
    const newArr = [...arr];
    newArr.splice(n, 1);
    setArr(newArr);
  };

  return (
    <Box bgColor={"purple.200"} mt={"20px"}>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Input
          mt={"20px"}
          mb={"20px"}
          htmlSize={20}
          width="auto"
          placeholder="메뉴를 입력하세요."
          focusBorderColor="pink.400"
          borderColor="black"
          onChange={(e) => setMenu(e.target.value)}
          value={menu}
        />
        <Button
          ml={"20px"}
          onClick={() => {
            handleAddNames(menu);
            //이름은 다시 ''초기화
            setMenu("");
          }}
        >
          추가
        </Button>
      </Flex>
      {arr.map((v, i) => (
        <Box mt={"10px"} key={i}>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <li key={i}>
              {v}
              <IconButton
                ml="10px"
                onClick={() => {
                  deleteNthValue(i);
                }}
                icon={<DeleteIcon />}
                size={"sm"}
                
              >
                삭제
              </IconButton>
              {/* https://chakra-ui.com/docs/components/icon/usage */}
              {/* https://chakra-ui.com/docs/components/icon-button/usage */}
            </li>
          </Flex>
        </Box>
      ))}
    </Box>
  );
}
