import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

import {
  BrowserRouter,
  Link as RouteLink,
  Routes,
  Route,
} from "react-router-dom";

import {
  Flex,
  Heading,
  Link,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { MdPersonAdd } from "react-icons/md";
import { MdViewColumn } from "react-icons/md";
import { MdFormatAlignJustify } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdGridOn } from "react-icons/md";
import { MdPalette } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import { MdApps } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFilter1 } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdEqualizer } from "react-icons/md";
import { MdReplay } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { MdContentCut } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { MdAccessAlarms } from "react-icons/md";
import { MdPieChartOutlined } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { BiData } from "react-icons/bi";
import { BiTask } from "react-icons/bi";
import { BiLineChart } from "react-icons/bi";
import { BiSpreadsheet } from "react-icons/bi";
import { BiShapeSquare } from "react-icons/bi";
import { BiChevronsRight } from "react-icons/bi";
import { BiChevronsLeft } from "react-icons/bi";
import { BiCut } from "react-icons/bi";
import { DiFirebase } from "react-icons/di";
import { VscChecklist } from "react-icons/vsc";

function Sidebar() {
  const sidebarSize = useSelector((state) => state.sidebarSize.sidebarSize);

  const [activeView, setActiveView] = useState("grid");

  // function setActiveView(view) {
  //   activeView.current = view;
  // }

  return (
    <Flex flexDir='column' alignItems='center' bg='#fff' color='blue.600'>
      <Flex flexDir='column' justifyContent='space-between'>
        {/* nav tells browser this is a navigation link */}
        <Flex flexDir='column' as='nav'>
          <Heading
            mt={50}
            mb={65}
            fontSize='2xl'
            alignSelf='center'
            letterSpacing='tight'
          >
            Apps
          </Heading>
        </Flex>

        {/* nav items container */}
        <Flex
          flexDir='column'
          align={sidebarSize === "small" ? "center" : "flex-start"}
          justifyContent='center'
        >
          {/* grid icon */}
          <Flex className='sidebar-items'>
            <IconButton
              as={RouteLink}
              to='/grid'
              variant='unstyled'
              fontSize='2xl'
              icon={<MdGridOn />}
              className={activeView === "grid" ? "active-icon" : null}
              onClick={() => setActiveView("grid")}
            />

            <Link
              as={RouteLink}
              to='/grid'
              _hover={{ textDecor: "none" }}
              className={activeView === "grid" ? "active" : null}
              onClick={() => setActiveView("grid")}
            >
              <Text>Grid</Text>
            </Link>
          </Flex>

          {/* templates icon */}
          <Flex className='sidebar-items'>
            <IconButton
              as={RouteLink}
              to='/templates'
              variant='unstyled'
              fontSize='2xl'
              icon={<MdRemoveRedEye />}
              className={activeView === "templates" ? "active-icon" : null}
              onClick={() => setActiveView("templates")}
            />

            <Link
              as={RouteLink}
              to='/templates'
              _hover={{ textDecor: "none" }}
              className={activeView.current === "templates" ? "active" : null}
              onClick={() => setActiveView("templates")}
            >
              <Text>Templates</Text>
            </Link>
          </Flex>

          {/* queries icon */}
          <Flex className='sidebar-items'>
            <IconButton
              as={RouteLink}
              to='/queries'
              variant='unstyled'
              fontSize='2xl'
              icon={<MdSearch />}
              className={activeView === "queries" ? "active-icon" : null}
              onClick={() => setActiveView("queries")}
            />
            <Link
              as={RouteLink}
              to='/queries'
              _hover={{ textDecor: "none" }}
              className={activeView === "queries" ? "active" : null}
              onClick={() => setActiveView("queries")}
            >
              <Text>Queries</Text>
            </Link>
          </Flex>

          {/* gantt icon */}
          <Flex className='sidebar-items'>
            <IconButton
              as={RouteLink}
              to='/gantt'
              variant='unstyled'
              fontSize='2xl'
              icon={<BiShapeSquare />}
              className={activeView === "gantt" ? "active-icon" : null}
              onClick={() => setActiveView("gantt")}
            />
            <Link
              as={RouteLink}
              to='/gantt'
              _hover={{ textDecor: "none" }}
              className={activeView === "gantt" ? "active" : null}
              onClick={() => setActiveView("gantt")}
            >
              <Text>Gantt</Text>
            </Link>
          </Flex>

          {/* kanban icon */}
          <Flex className='sidebar-items'>
            <IconButton
              as={RouteLink}
              to='/kanban'
              variant='unstyled'
              fontSize='2xl'
              icon={<VscChecklist />}
              className={activeView === "kanban" ? "active-icon" : null}
              onClick={() => setActiveView("kanban")}
            />
            <Link
              as={RouteLink}
              to='/kanban'
              _hover={{ textDecor: "none" }}
              className={activeView === "kanban" ? "active" : null}
              onClick={() => setActiveView("kanban")}
            >
              <Text>Kanban</Text>
            </Link>
          </Flex>

          {/* scheduler icon */}
          <Flex className='sidebar-items'>
            <IconButton
              as={RouteLink}
              to='/scheduler'
              variant='unstyled'
              fontSize='2xl'
              icon={<MdAccessAlarms />}
              className={activeView === "scheduler" ? "active-icon" : null}
              onClick={() => setActiveView("scheduler")}
            />
            <Link
              as={RouteLink}
              to='/scheduler'
              _hover={{ textDecor: "none" }}
              className={activeView === "scheduler" ? "active" : null}
              onClick={() => setActiveView("scheduler")}
            >
              <Text>Scheduler</Text>
            </Link>
          </Flex>

          {/* pivot icon */}
          <Flex className='sidebar-items'>
            <IconButton
              as={RouteLink}
              to='/pivot'
              variant='unstyled'
              fontSize='2xl'
              icon={<BiLineChart />}
              className={activeView === "pivot" ? "active-icon" : null}
              onClick={() => setActiveView("pivot")}
            />
            <Link
              as={RouteLink}
              to='/pivot'
              _hover={{ textDecor: "none" }}
              className={activeView === "pivot" ? "active" : null}
              onClick={() => setActiveView("pivot")}
            >
              <Text>Pivot</Text>
            </Link>
          </Flex>

          {/* spreadsheet icon */}
          <Flex className='sidebar-items'>
            <IconButton
              as={RouteLink}
              to='/spreadsheet'
              variant='unstyled'
              fontSize='2xl'
              icon={<BiSpreadsheet />}
              className={activeView === "spreadsheet" ? "active-icon" : null}
              onClick={() => setActiveView("spreadsheet")}
            />
            <Link
              as={RouteLink}
              to='/spreadsheet'
              _hover={{ textDecor: "none" }}
              className={activeView === "spreadsheet" ? "active" : null}
              onClick={() => setActiveView("spreadsheet")}
            >
              <Text>Spreadsheet</Text>
            </Link>
          </Flex>

          {/* app manager icon */}
          <Flex className='sidebar-items'>
            <IconButton
              as={RouteLink}
              to='/appmgr'
              variant='unstyled'
              fontSize='2xl'
              icon={<MdApps />}
              className={activeView === "appmgr" ? "active-icon" : null}
              onClick={() => setActiveView("appmgr")}
            />
            <Link
              as={RouteLink}
              to='/appmgr'
              _hover={{ textDecor: "none" }}
              className={activeView === "appmgr" ? "active" : null}
              onClick={() => setActiveView("appmgr")}
            >
              <Text>App Mgr</Text>
            </Link>
          </Flex>

          {/* demo data icon */}
          <Flex className='sidebar-items'>
            <IconButton
              as={RouteLink}
              to='/demodata'
              variant='unstyled'
              fontSize='2xl'
              icon={<BiData />}
              className={activeView === "demodata" ? "active-icon" : null}
              onClick={() => setActiveView("demodata")}
            />
            <Link
              as={RouteLink}
              to='/demodata'
              _hover={{ textDecor: "none" }}
              className={activeView === "demodata" ? "active" : null}
              onClick={() => setActiveView("demodata")}
            >
              <Text>Demo Data</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
