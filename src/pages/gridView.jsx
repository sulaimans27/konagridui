import React from "react";
import GridToolbar from "../components/toolbar/gridToolbar";
import Grid from "../components/grid/grid";
import { Flex } from "@chakra-ui/react";

export default function gridView() {
  return (
    <Flex w='85%' p='1%' flexDir='column' overflow='auto' h='100vh'>
      <GridToolbar />
      <Grid />
    </Flex>
  );
}
