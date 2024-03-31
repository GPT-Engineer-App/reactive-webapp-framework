import React from "react";
import { Box, SimpleGrid, Text, Progress } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
      <Box bg="white" p={6} rounded="md" shadow="md">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Sales Progress
        </Text>
        <Progress value={80} size="lg" colorScheme="blue" mb={2} />
        <Text>80% of sales target achieved</Text>
      </Box>
      <Box bg="white" p={6} rounded="md" shadow="md">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          User Growth
        </Text>
        <Text fontSize="4xl" fontWeight="bold">
          2,500
        </Text>
        <Text>New users this month</Text>
      </Box>
      <Box bg="white" p={6} rounded="md" shadow="md">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Revenue
        </Text>
        <Text fontSize="4xl" fontWeight="bold">
          $50,000
        </Text>
        <Text>Revenue this month</Text>
      </Box>
    </SimpleGrid>
  );
};

export default Dashboard;
