import { useCallback, useEffect } from "react";
import "./App.css";
import Words from "./components/Words";
import ButtonLetters from "./components/ButtonLetters";
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import useWords from "./hooks/useWords";
import HangmanBoard from "./components/HangmanBoard";
import Reset from "./components/Reset";

function App() {

  const {randomWord, error, totalGuesses, setTotalGuesses, setRandomWord, youWin, setYouWin, youLose, setYouLose, reset, setReset, resetGame} = useWords();

  console.log(randomWord);

  const wrongLetters = totalGuesses.filter(letter => !randomWord.includes(letter))

  const addLetter = useCallback((letter: string) => {
    if(totalGuesses.includes(letter)) return;

    setTotalGuesses((currentLetter) => [...currentLetter, letter])
  }, [totalGuesses])

  useEffect(() => {
    if (reset) {
      resetGame(); // Reset the game when the reset state changes
      setReset(false); // Reset the reset state
    }
  }, [reset])

  const winner = randomWord.split('').every(letter => totalGuesses.includes(letter));
  const loser = wrongLetters.length >= 6;
  
  const handleReset = () => {
    setReset(true)
  }
  
  return (
    <Center minHeight="100vh">
      <Box maxWidth="600px" width="100%" px={4}>
        <Box
          
          >
          <HangmanBoard numberGuesses={wrongLetters.length} />
        </Box>
        <Box display='flex' justifyContent='center' marginBottom='10'>
          <Words randomGuessWord={randomWord} currentGuessLetter={totalGuesses} showLetters={loser}/>
        </Box>

        <Box>
          {winner ? 
              <Reset winner={winner} onReset={handleReset}/>
            : 
            loser ? 
              <Reset winner={winner} onReset={handleReset}/>
            :
              <ButtonLetters 
                correct={totalGuesses.filter(letter => randomWord.includes(letter))}
                inactive={wrongLetters}
                addLetters={addLetter}
              /> }
            {/* <Reset onClick={handleReset}/> */}
        </Box>
      </Box>
      
    </Center>
  
    
  );
}

export default App;
