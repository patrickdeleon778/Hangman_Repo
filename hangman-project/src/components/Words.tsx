import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useWords from "../hooks/useWords";
import { Box, Text } from '@chakra-ui/react'
import WordsProp from "../models/wordsProps";

const Words = ( { currentGuessLetter, randomGuessWord }:WordsProp ) => {

// const testWord = 'TESTING';
// const guessedLetter = ["a"]
      
const {randomWord, error, totalGuesses, setTotalGuesses } = useWords();

// const wrongLetters = totalGuesses.filter(letter => randomWord.includes(letter))

// const addLetter = useCallback(
//   (letter: string) => {
//   if(totalGuesses.includes(letter)) return

//   setTotalGuesses(currentLetter => [...currentLetter, letter])
// }, [totalGuesses])

  return (
    <Box 
      display='flex' 
      textTransform='uppercase'
      fontFamily='bubbleFont'
      fontSize='75px'
      gap='10'
    >
      {randomWord.split('').map((letter, index) => (
        <Box borderBottom='3px solid black' key={index}>
          <Box visibility={totalGuesses.includes(letter) ? 'visible' : 'hidden'}>
              {letter}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Words;
