import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Box, Text } from '@chakra-ui/react'
import WordsProp from "../models/wordsProps";

const Words = ( { currentGuessLetter, randomGuessWord }:WordsProp ) => {

   // const guessed = ['e', 'a', 'i', 'o', 'u']
   
  return (
    <Box 
      display='flex' 
      textTransform='uppercase'
      fontFamily='bubbleFont'
      fontSize='75px'
      gap='10'
    >
      {randomGuessWord.split('').map((letter, index) => (
        <Box borderBottom='3px solid black' key={index}>
          <Box visibility={currentGuessLetter.includes(letter) ? 'visible' : 'hidden'}>
              {letter}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Words;
