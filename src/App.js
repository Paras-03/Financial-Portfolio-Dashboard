import React from "react";
import Dashboard from "./components/Dashboard";
import { 
  Box
} from "@chakra-ui/react";

const App = () => {
  return (
    <Box p={6} bg="gray.50" minH="100vh">
      <Dashboard />
    </Box>
  );
};

export default App;
