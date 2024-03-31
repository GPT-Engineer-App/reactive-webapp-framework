import React from "react";
import { Box, Menu, MenuButton, Avatar, MenuList, MenuItem } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import ColorModeSwitcher from "../components/ColorModeSwitcher";

const Index = () => {
  return (
    <Box>
      {}
      <Menu>
        <MenuButton as={Avatar} src="path/to/user/profile.jpg" />
        <MenuList>
          {}
          <MenuItem icon={<FaUser />}>Profile</MenuItem>
          <ColorModeSwitcher />
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Index;
