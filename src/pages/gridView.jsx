import React from "react";
import { useSelector } from "react-redux";

import GridToolbar from "../components/toolbar/gridToolbar";
import Grid from "../components/grid/grid";
import Query from "../components/querybuilder/querybuilder";

import { Flex } from "@chakra-ui/react";

export default function GridView() {
  let queryBuilderVisible = useSelector(
    (state) => state.queryBuilderVisible.queryBuilderVisible
  );

  // let queryViewVisible = true;

  return (
    <Flex w='85%' p='1%' flexDir='column' overflow='auto' h='100vh'>
      <Flex>
        <GridToolbar />
      </Flex>
      <Flex
        flexDir={"column"}
        display={queryBuilderVisible}
        borderColor={"blue.600"}
        borderWidth={2}
      >
        <Flex ml={2} mt={1} color={"blue.600"} fontSize='sm'>
          <label>QueryBuilder</label>
        </Flex>
        <Flex>
          <Query />
        </Flex>
      </Flex>

      <Flex mt={8}>
        <Grid />
      </Flex>
    </Flex>
  );
}
