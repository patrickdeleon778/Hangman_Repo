// import React, { useEffect, useState } from 'react'
// import words from '../randomTestWords.json'
// import wordAPI from '../services/wordAPI';


// const useWords = () => {
//     // const [randomWord, setRandomWord] = useState(() => {
//     //     return words[Math.floor(Math.random() * words.length)]
//     //   })

//     const [wordToGuess, setWordToGuess] = useState({});
//     const [error, setError] = useState('');

//     useEffect(() => {
//         wordAPI.get('/words/random')
//         .then((response) => setWordToGuess(() => console.log(response.data)))
        
//     }, [])
    
//     return {wordToGuess, error};
    
// }

// export default useWords
