import React, { useState } from "react";
import { Box, Flex, VStack, Heading, Text, Avatar, Menu, MenuButton, MenuList, MenuItem, Button, useColorMode } from "@chakra-ui/react";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import Dashboard from "../components/Dashboard";

const menuItems = [
  { label: "Dashboard", icon: FaHome },
  { label: "Projects", icon: FaHome },
  { label: "Team", icon: FaHome },
  { label: "Calendar", icon: FaHome },
  { label: "Documents", icon: FaHome },
  { label: "Reports", icon: FaHome },
  { label: "Analytics", icon: FaHome },
  { label: "Finance", icon: FaHome },
  { label: "Settings", icon: FaHome },
  { label: "Help", icon: FaHome },
];

const Index = () => {
  const commonStyles = {
    px: 4,
    py: 2,
    rounded: "md",
    _hover: { bg: "gray.100" },
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex h="100vh" bg={colorMode === "light" ? "white" : "gray.800"}>
      {/* Left Navigation */}
      <Box w="250px" bg="gray.50" p={4}>
        <Heading size="md" mb={8}>
          My App
        </Heading>
        <VStack align="stretch" spacing={1}>
          {menuItems.map((item, index) => (
            <Button key={index} leftIcon={<item.icon />} variant="ghost" justifyContent="start" {...commonStyles}>
              {item.label}
            </Button>
          ))}
        </VStack>
      </Box>

      {/* Main Content */}
      <Box flex={1} p={8}>
        <Flex justify="space-between" align="center" mb={8}>
          <Heading size="lg">Welcome back, John!</Heading>
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
