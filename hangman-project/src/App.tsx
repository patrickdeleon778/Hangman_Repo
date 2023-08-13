import { useCallback, useEffect } from "react";
import "./App.css";
import Words from "./components/Words";
import ButtonLetters from "./components/ButtonLetters";
import { Box, Center, Flex } from "@chakra-ui/react";
import useWords from "./hooks/useWords";

function App() {

  const {randomWord, error, totalGuesses, setTotalGuesses, setRandomWord, FetchData } = useWords();

  console.log(randomWord);

  const wrongLetters = totalGuesses.filter(letter => randomWord.includes(letter))

  const addLetter = useCallback((letter: string) => { debugger
    if(totalGuesses.includes(letter)) return;

    setTotalGuesses((currentLetter) => [...currentLetter, letter])
  }, [totalGuesses])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [totalGuesses])


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
