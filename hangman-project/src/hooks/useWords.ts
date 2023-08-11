import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import words from '../randomTestWords.json'
// import wordAPI from '../services/wordAPI';


const useWords = () => {
    // const [randomWord, setRandomWord] = useState(() => {
    //     return words[Math.floor(Math.random() * words.length)]
    //   })

    const [randomWord, setRandomWord] = useState('');

    const [error, setError] = useState('');

    const FetchData = () => {
        axios.get('/src/randomTestWords.json')
        .then(response => {
            const words = response.data;
            setRandomWord(words[Math.floor(Math.random() * words.length)])
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    useEffect(() => {
        FetchData();
    }, [])
    
    return {randomWord, error};
    
}

export default useWords
