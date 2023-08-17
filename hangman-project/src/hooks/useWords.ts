import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import words from '../randomTestWords.json'
// import wordAPI from '../services/wordAPI';


const useWords = () => {
    // const [randomWord, setRandomWord] = useState(() => {
    //     return words[Math.floor(Math.random() * words.length)]
    //   })

    const [randomWord, setRandomWord] = useState<string>('');

    const [error, setError] = useState('');

    const [totalGuesses, setTotalGuesses] = useState<string[]>([]);

    const [reset, setReset] = useState(false);

    const [play, setPlay] = useState(false)

    const [deadCount, setDeadCount] = useState(0);

    const [winCount, setWinCount] = useState(0);

    const FetchData = () => {
        axios.get('/src/randomTestWords.json')
        .then(response => {
            const words = response.data;
            setRandomWord(words[Math.floor(Math.random() * words.length)])
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const resetGame = () => {
        setRandomWord("");
        setError("");
        setTotalGuesses([]);
        setReset(false);
        FetchData();
        setPlay(false);
      };

    const handlePlay = () => {
        setPlay(true);
    }

    useEffect(() => {
        FetchData();
    }, [])
    
    return {randomWord, error, totalGuesses, setTotalGuesses, setRandomWord, FetchData, reset, setReset, resetGame, play, setPlay, handlePlay, deadCount, setDeadCount, winCount, setWinCount};
    
}

export default useWords
