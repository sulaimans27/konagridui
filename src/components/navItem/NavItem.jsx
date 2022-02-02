import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { Link as RouteLink } from "react-router-dom";

import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";

function NavItem({ icon, title, active }) {
  // get size from global this.state
  const sidebarSize = useSelector((state) => state.sidebarSize.sidebarSize);

  return (
    <Flex
      mt={30}
      flexDir='column'
      w='100%'
      alignItems={sidebarSize === "small" ? "center" : "flex-start"}
    >
      <Menu placement='right'>
        <Link
          as={RouteLink}
          to={`/${title}`}
          backgroundColor={active && "#AEC8CA"}
          pt={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
          w={sidebarSize === "large" && "100%"}
        >
          <MenuButton w='100%'>
            <Flex>
              <Icon
                as={icon}
                fontSize='xl'
                color={active ? "#82AAAD" : "gray.500"}
              />
              <Text ml={5} display={sidebarSize === "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}

export default NavItem;
