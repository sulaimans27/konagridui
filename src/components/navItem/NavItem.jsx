import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { setSelectedApp } from "../../features/selectedAppSlice";

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
import { setSelectedAppTitle } from "../../features/selectedAppTitleSlice";

function NavItem({ icon, linkTitle, bannerTitle, active }) {
  // get size from global this.state
  const sidebarSize = useSelector((state) => state.sidebarSize.sidebarSize);

  // get active view from global state
  const selectedApp = useSelector((state) => state.selectedApp.selectedApp);

  const dispatch = useDispatch();
  return (
    <Flex
      mt={3}
      flexDir='column'
      w='100%'
      alignItems={sidebarSize === "small" ? "center" : "flex-start"}
    >
      <Menu placement='right'>
        <Link
          as={RouteLink}
          to={`/${linkTitle}`}
          // backgroundColor={active && "#AEC8CA"}
          pt={3}
          borderRadius={8}
          // _hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
          w={sidebarSize === "large" && "100%"}
          onClick={() => {
            dispatch(setSelectedAppTitle(bannerTitle));
          }}
        >
          <MenuButton w='100%'>
            <Flex>
              <Icon
                as={icon}
                fontSize='xl'
                color={active ? "#82AAAD" : "gray.500"}
              />
              <Text ml={5} display={sidebarSize === "small" ? "none" : "flex"}>
                {linkTitle}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}

export default NavItem;
