import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Box, Text } from '@chakra-ui/react'
import WordsProp from "../models/wordsProps";

const Words = ( { currentGuessLetter, randomGuessWord, showLetters = false }:WordsProp ) => {

   // const guessed = ['e', 'a', 'i', 'o', 'u']
   
  return (
    <Box 
      display='flex' 
      textTransform='uppercase'
      fontFamily='sonicFont'
      fontSize='75px'
      gap='10'
      color='goldenrod'
      bg='gold'
      border='4px solid blue'
      borderRadius='20px'
      style={{
        WebkitTextStroke: '4px blue',
      }}
    >
      {randomGuessWord.split('').map((letter, index) => (
        <Box borderBottom='3px solid black' key={index} margin='2'>
          <Box visibility={currentGuessLetter.includes(letter) || showLetters ? 'visible' : 'hidden'}>
              {letter}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Words;
