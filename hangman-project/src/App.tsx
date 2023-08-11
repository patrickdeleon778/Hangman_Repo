import { useState } from "react";
import "./App.css";
import Words from "./components/Words";
import ButtonLetters from "./components/ButtonLetters";
import { Box, Center, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Center minHeight="100vh">
      <Box maxWidth="800px" width="100%" px={4}>
        <Words />
        <Box>
          <ButtonLetters />
        </Box>
      </Box>
    </Center>
  );
}

export default App;
