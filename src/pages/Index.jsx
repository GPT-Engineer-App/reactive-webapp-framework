import React from "react";
import { Box, Flex, VStack, Heading, Avatar, Menu, MenuButton, MenuList, MenuItem, Button, useColorMode } from "@chakra-ui/react";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import Dashboard from "../components/Dashboard";

import { Link } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: FaHome, link: "/" },
  { label: "Projects", icon: FaHome },
  { label: "Team", icon: FaHome, link: "/team" },
  { label: "Calendar", icon: FaHome },
  { label: "Documents", icon: FaHome },
  { label: "Reports", icon: FaHome },
  { label: "Analytics", icon: FaHome },
  { label: "Finance", icon: FaHome },
  { label: "Settings", icon: FaHome },
  { label: "Help", icon: FaHome },
];

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const commonStyles = {
    px: 4,
    py: 2,
    rounded: "md",
    _hover: { bg: colorMode === "dark" ? "gray.600" : "gray.100" },
  };

  return (
    <Flex h="100vh" bg={colorMode === "light" ? "white" : "gray.800"}>
      {/* Left Navigation */}
      <Box w="250px" bg={colorMode === "dark" ? "gray.700" : "gray.50"} p={4}>
        <Heading size="md" mb={8} color={colorMode === "dark" ? "white" : "black"}>
          My App
        </Heading>
        <VStack align="stretch" spacing={1}>
          {menuItems.map((item, index) => (
            <Button key={index} as={Link} to={item.link || "#"} leftIcon={<item.icon />} variant="ghost" justifyContent="start" color={colorMode === "dark" ? "white" : "black"} {...commonStyles}>
              {item.label}
            </Button>
          ))}
        </VStack>
      </Box>

      {/* Main Content */}
      <Box flex={1} p={8}>
        <Flex justify="space-between" align="center" mb={8}>
          <Heading size="lg" color={colorMode === "dark" ? "white" : "black"}>
            Welcome back, John!
          </Heading>
          <Menu>
            <MenuButton as={Avatar} src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTg1NTU2N3ww&ixlib=rb-4.0.3&q=80&w=1080" cursor="pointer" />
            <MenuList>
              <MenuItem icon={<FaUser />} {...commonStyles}>
                Profile
              </MenuItem>
              <MenuItem icon={<FaCog />} {...commonStyles}>
                Settings
              </MenuItem>
              <MenuItem icon={<FaSignOutAlt />} {...commonStyles}>
                Logout
              </MenuItem>
              <MenuItem onClick={toggleColorMode} {...commonStyles}>
                {colorMode === "light" ? "Dark Mode" : "Light Mode"}
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Dashboard />
      </Box>
    </Flex>
  );
};

export default Index;
