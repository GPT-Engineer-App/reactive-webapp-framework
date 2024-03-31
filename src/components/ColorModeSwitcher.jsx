import React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <IconButton size="md" fontSize="lg" variant="ghost" color="current" marginLeft="2" onClick={toggleColorMode} icon={colorMode === "light" ? <FaMoon /> : <FaSun />} aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`} />;
};

export default ColorModeSwitcher;
