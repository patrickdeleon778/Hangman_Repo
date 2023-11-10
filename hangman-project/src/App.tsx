import { useCallback, useEffect } from "react";
import "./App.css";
import Words from "./components/Words";
import ButtonLetters from "./components/ButtonLetters";
import { Box, Button, Center, Flex, Text, Image } from "@chakra-ui/react";
import useWords from "./hooks/useWords";
import HangmanBoard from "./components/HangmanBoard";
import Reset from "./components/Reset";
import SonicBgm from "./components/AudioComponents/SonicBgm";
import SonicWinSound from "./components/AudioComponents/SonicWinSound";
import SonicLoseSound from "./components/AudioComponents/SonicLoseSound";
import Oof from "./components/AudioComponents/Oof";
import DancingSong from "./components/AudioComponents/DancingSong";

import eggman from "../src/images/eggman.png";
import sonic from "../src/images/Sonic_The_Hedgehog.png";
import sanic from "../src/images/sanic.png";
import sonicRing from "../images/Sonic_ring.png";
import signStick from "../src/images/sign on a stick.png";

function App() {

  const {randomWord, error, totalGuesses, setTotalGuesses, setRandomWord, reset, setReset, resetGame, play, setPlay, handlePlay, deadCount, setDeadCount, winCount, setWinCount} = useWords();

  console.log(randomWord);

  const wrongLetters = totalGuesses.filter(letter => !randomWord.includes(letter)) // filters through each letter of the random word and check if it's not equal

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


  useEffect(() => {

    winner && setWinCount(value => value + 1);
  
  }, [winner])


  useEffect(() => {

    loser && setDeadCount(value => value + 1);
    setWinCount(0);
  
  }, [loser])
  
  console.log(winCount);
  console.log(deadCount);
  
  return (
    
    <Center minHeight="100vh">
      
      {!play ? (
      <Box display='flex' flexDir='column' alignItems='center'>
        <Box m='100' display='flex' justifyContent='center'>
          <Image src={sonic} m={0} boxSize={{ base: "100%", md: "75%", }} objectFit="cover"/>
        </Box>
        <Box m="100">
        {deadCount === 3 &&
        <>
          <Box position='absolute' right='900' top='670'>
            <Image boxSize='100px' src={sanic}/>
          </Box>
          <Box position='absolute' right='100' top='660'>
            <Image boxSize='200px' src={signStick}/>
            <Image height='103px' width='192px' position='absolute' right='1' top='0' src={eggman}/>
          </Box>
          {/* <Box position='absolute' right='505' top='503'>
            <Image height='100px' width='190px' src='/src/images/eggman.png'/>
          </Box> */}
        </> }
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
            <HangmanBoard numberGuesses={wrongLetters.length} deathCounter={deadCount} isLoser={loser} winnerCounter={winCount} isWinner={winner}/>
          </Box>
          <Box display='flex' justifyContent='center' marginBottom='10'>
            <Words randomGuessWord={randomWord} currentGuessLetter={totalGuesses} showLetters={loser}
          />
        </Box>

        <Box>
          {winner ? 
            <>
              {winCount === 2 ? <DancingSong/> : <SonicWinSound/>}
              <Reset winner={winner} onReset={handleReset}/>
            </>
            : 
            loser ? 
            <>
              <Oof/>
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
