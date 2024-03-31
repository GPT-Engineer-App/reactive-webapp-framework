import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";

const Projects = () => {
  return (
    <Layout>
      <Box p={8}>
        <Text fontSize="2xl" mb={4}>
          Projects Gantt Chart Placeholder
        </Text>
        {}
        <Box p={5} borderWidth="1px" borderRadius="lg">
          This is where the Gantt chart will be displayed.
        </Box>
      </Box>
    </Layout>
  );
};

export default Projects;
