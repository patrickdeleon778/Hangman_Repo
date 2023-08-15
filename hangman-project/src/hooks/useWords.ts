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

    const [youWin, setYouWin] = useState(false);

    const [youLose, setYouLose] = useState(false);

    const [reset, setReset] = useState(false);

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
        setYouWin(false);
        setYouLose(false);
        setReset(false);
        FetchData();
      };

    useEffect(() => {
        FetchData();
    }, [])
    
    return {randomWord, error, totalGuesses, setTotalGuesses, setRandomWord, FetchData, youWin, setYouWin, youLose, setYouLose, reset, setReset, resetGame};
    
}

export default useWords
