import React from 'react'
import C from './C'
import { Box } from '@chakra-ui/react'

export default function B() {
  return (
    <>
      <Box w={100} h={100} bgColor="yellow.500">
        B
      </Box>
      <C />
    </>
  );
}
