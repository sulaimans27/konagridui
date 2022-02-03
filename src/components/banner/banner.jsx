import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";

function Banner() {
  // get active view title from global state
  const selectedAppTitle = useSelector((state) => state.selectedAppTitle);

  return (
    <Flex
      h='4%'
      w='100%'
      backgroundColor='blue.600'
      color='white'
      justifyContent='flex-start'
      alignItems='center'
    >
      <Text ml={10}>{selectedAppTitle.selectedAppTitle}</Text>
    </Flex>
  );
}

export default Banner;
