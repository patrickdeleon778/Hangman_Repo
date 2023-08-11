import React, { useEffect, useState } from "react";
import axios from "axios";
import useWords from "../hooks/useWords";
import { Box, Text } from '@chakra-ui/react'

const Words = () => {

const testWord = 'TESTING';
const guessedLetter = ["a"]
      
const {randomWord, error} = useWords();
 
  return (
    <Box 
      display='flex' 
      textTransform='uppercase'
      fontFamily='bubbleFont'
      fontSize='50px'
      gap='5'
    >
      {randomWord.split('').map((letter, index) => (
        <Box borderBottom='8px solid black'>
          <Box 
            visibility={guessedLetter.includes(letter)
             ? 'visible' 
             : 'hidden'
          }>{letter}</Box>
        </Box>
      ))}
      {/* {error && <Text>{error}</Text>}
      {randomWord && <Text>{randomWord}</Text>} */}
    </Box>
  );
}

export default Words;
