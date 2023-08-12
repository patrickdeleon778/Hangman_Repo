import { useCallback, useState } from "react";
import "./App.css";
import Words from "./components/Words";
import ButtonLetters from "./components/ButtonLetters";
import { Box, Center, Flex } from "@chakra-ui/react";
import useWords from "./hooks/useWords";



const {randomWord, error, totalGuesses, setTotalGuesses } = useWords();

const wrongLetters = totalGuesses.filter(letter => randomWord.includes(letter))

const addLetter = useCallback(
  (letter: string) => {
  if(totalGuesses.includes(letter)) return

  setTotalGuesses(currentLetter => [...currentLetter, letter])
}, [totalGuesses])




function App() {
  return (
    <Center minHeight="100vh">
      <Box maxWidth="600px" width="100%" px={4}>
        <Box display='flex' justifyContent='center' marginBottom='10'>
          <Words randomGuessWord={randomWord} currentGuessLetter={totalGuesses}/>
        </Box>

        <Box>
          <ButtonLetters 
            active={totalGuesses.filter(letter => randomWord.includes(letter))}
            inactive={wrongLetters}
            addLetters={addLetter}
          />
        </Box>
      </Box>
    </Center>
  );
}

export default App;
