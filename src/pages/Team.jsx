import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, useColorMode } from "@chakra-ui/react";

const teamMembers = [
  { name: "John Doe", role: "Developer" },
  { name: "Jane Smith", role: "Designer" },
  { name: "Mike Johnson", role: "Manager" },
];

const Team = () => {
  const { colorMode } = useColorMode();

  return (
    <Box p={8}>
      <Table variant="simple" size="md">
        <Thead>
          <Tr>
            <Th color={colorMode === "dark" ? "white" : "black"}>Name</Th>
            <Th color={colorMode === "dark" ? "white" : "black"}>Role</Th>
          </Tr>
        </Thead>
        <Tbody>
          {teamMembers.map((member, index) => (
            <Tr key={index}>
              <Td color={colorMode === "dark" ? "white" : "black"}>{member.name}</Td>
              <Td color={colorMode === "dark" ? "white" : "black"}>{member.role}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Team;
