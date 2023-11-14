import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import words from '../randomTestWords.json'
// import wordAPI from '../services/wordAPI';
// import wordData from '../randomTestWords.json';


const useWords = () => {
    // const [randomWord, setRandomWord] = useState(() => {
    //     return words[Math.floor(Math.random() * words.length)]
    //   })

    const [randomWord, setRandomWord] = useState<string>(''); // random word useState

    const [error, setError] = useState(''); // error state for errors 

    const [totalGuesses, setTotalGuesses] = useState<string[]>([]); // total guesses set as an empty array

    const [reset, setReset] = useState(false); // reset state to reset the game

    const [play, setPlay] = useState(false) // play state is only there so I can 

    const [deadCount, setDeadCount] = useState(0); // dead count to count how many times you lost.

    const [winCount, setWinCount] = useState(0); // win count to count how many times you win

    const FetchData = () => { // using axios to simulate fetching data from an api but it's just fetching from the .json file instead
        axios.get('/randomTestWords.json') 
        .then(response => {
            const words = response.data; // sets response.data to the variable 'words'
            setRandomWord(words[Math.floor(Math.random() * words.length)]) // sets a random word from the .json file
        })
        .catch(error => {
            setError(error.message); // catches the error and displays it if there is one.
        })
    }

    const resetGame = () => { // reset function to call when you press the reset button
        setRandomWord(""); // ALL THIS STUFF BELOW IS TO RESET THE GAME
        setError("");
        setTotalGuesses([]);
        setReset(false);
        FetchData();
        setPlay(false);
      };

    const handlePlay = () => { // play function to start the game at the beginning
        setPlay(true);
    }

    useEffect(() => { // using a useEffect to call the FetchData() once. Thanks to the [] it'll only run once. 
        FetchData();
    }, [])
    
    // This stuff below is the custom hook returning the cool stuff
    return {randomWord, error, totalGuesses, setTotalGuesses, setRandomWord, FetchData, reset, setReset, resetGame, play, setPlay, handlePlay, deadCount, setDeadCount, winCount, setWinCount};
    
}

export default useWords
