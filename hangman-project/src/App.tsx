import { useCallback, useEffect } from "react";
import "./App.css";
import Words from "./components/Words";
import ButtonLetters from "./components/ButtonLetters";
import { Box, Button, Center, Flex, Text, Image } from "@chakra-ui/react";
import useWords from "./hooks/useWords";
import HangmanBoard from "./components/HangmanBoard";
import Reset from "./components/Reset";
import SonicBgm from "./components/SonicBgm";
import SonicWinSound from "./components/SonicWinSound";
import SonicLoseSound from "./components/SonicLoseSound";

function App() {

  const {randomWord, error, totalGuesses, setTotalGuesses, setRandomWord, reset, setReset, resetGame, play, setPlay, handlePlay} = useWords();

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
      
      {!play ? (
      <Box display='flex' flexDir='column' alignItems='center'>
        <Box m='100'>
          <Image src="/src/images/Sonic_The_Hedgehog.png"/>
        </Box>
        <Box m="100">
            <Button
              onClick={handlePlay}
              width="200px"
              height="100px"
              fontSize="45px"
              borderRadius="100px"
              border="5px solid blue"
              bg="gold"
              fontFamily="sonicFont"
              pt="2"
              color="goldenrod"
              style={{
                WebkitTextStroke: '3px blue',
              }}
            >
              PLAY
            </Button>
        </Box>
      </Box>

    ) : (
      <>
        {winner ? null : <SonicBgm/>}
        <Box maxWidth="600px" width="100%" px={4}>
          <Box>
            <HangmanBoard numberGuesses={wrongLetters.length} />
          </Box>
          <Box display='flex' justifyContent='center' marginBottom='10'>
            <Words randomGuessWord={randomWord} currentGuessLetter={totalGuesses} showLetters={loser}
          />
        </Box>

        <Box>
          {winner ? 
            <>
              <SonicWinSound/>
              {!play}
              <Reset winner={winner} onReset={handleReset}/>
            </>
            : 
            loser ? 
            <>
              <SonicLoseSound/>
              <Reset winner={winner} onReset={handleReset}/>
            </>
            :
              <ButtonLetters 
                correct={totalGuesses.filter(letter => randomWord.includes(letter))}
                inactive={wrongLetters}
                addLetters={addLetter}
              /> }
            {/* <Reset onClick={handleReset}/> */}
        </Box>
      </Box>
      </>
    )}      
    </Center>
  
    
  );
}

export default App;
