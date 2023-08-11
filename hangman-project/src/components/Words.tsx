import React, { useEffect, useState } from "react";
import axios from "axios";

const Words = () => {
  const [wordToGuess, setWordToGuess] = useState("");
  const [error, setError] = useState("");

  // async function fetchData(){
  //   try {
  //     // const word = 'zero'
  //     const response = await axios({
  //       "method":"GET",
  //       "url":"https://wordsapiv1.p.mashape.com/words/soliloquy",
  //       "headers":{
  //         "X-Mashape-Key":"1f8390f569mshdc074cd5ab3948cp166bf4jsn6ca3378c1957",
  //         "Accept": "application/json"
  //       }
  //     }) 
  //     return {
  //       body: JSON.stringify(response.data),
  //       headers: {
  //         'Access-Control-Allow-Origin': '*'
  //       }
  //     }
  //   } catch(error) {
  //     console.log(error);
  //   }
  // }
  useEffect(() => {


    const url = 'https://wordsapiv1.p.rapidapi.com/words/soliloquy';

    const options = {
      "method":"GET",
      "headers":{
        "X-RapidAPI-Key":"1f8390f569mshdc074cd5ab3948cp166bf4jsn6ca3378c1957",
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    }

    fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }, []);

  return (
    <div>
      {error ? <p>{error}</p> : <p>Word to Guess: {wordToGuess}</p>}
    </div>
  );
}

export default Words;
