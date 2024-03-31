import React from "react";
import { Box, SimpleGrid, Text, Progress, useColorMode } from "@chakra-ui/react";

const Dashboard = () => {
  const { colorMode } = useColorMode();

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
      <Box bg={colorMode === "dark" ? "gray.700" : "white"} p={6} rounded="md" shadow="md">
        <Text fontSize="xl" fontWeight="bold" mb={4} color={colorMode === "dark" ? "white" : "black"}>
          Sales Progress
        </Text>
        <Progress value={80} size="lg" colorScheme="blue" mb={2} />
        <Text color={colorMode === "dark" ? "white" : "black"}>80% of sales target achieved</Text>
      </Box>
      <Box bg={colorMode === "dark" ? "gray.700" : "white"} p={6} rounded="md" shadow="md">
        <Text fontSize="xl" fontWeight="bold" mb={4} color={colorMode === "dark" ? "white" : "black"}>
          User Growth
        </Text>
        <Text fontSize="4xl" fontWeight="bold" color={colorMode === "dark" ? "white" : "black"}>
          2,500
        </Text>
        <Text color={colorMode === "dark" ? "white" : "black"}>New users this month</Text>
      </Box>
      <Box bg={colorMode === "dark" ? "gray.700" : "white"} p={6} rounded="md" shadow="md">
        <Text fontSize="xl" fontWeight="bold" mb={4} color={colorMode === "dark" ? "white" : "black"}>
          Revenue
        </Text>
        <Text fontSize="4xl" fontWeight="bold" color={colorMode === "dark" ? "white" : "black"}>
          $50,000
        </Text>
        <Text color={colorMode === "dark" ? "white" : "black"}>Revenue this month</Text>
      </Box>
    </SimpleGrid>
  );
};

export default Dashboard;
