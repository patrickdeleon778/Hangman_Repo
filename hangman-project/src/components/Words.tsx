import React, { useEffect, useState } from "react";
import axios from "axios";

const Words = () => {
  const [wordToGuess, setWordToGuess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://wordsapiv1.p.rapidapi.com/words/',
      params: {random: 'true'},
      headers: {
        'X-RapidAPI-Key': '1f8390f569mshdc074cd5ab3948cp166bf4jsn6ca3378c1957',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then((response) => {
        setWordToGuess(response.data.word);
      })
      .catch((error) => {
        setError('Error fetching word: ' + error.message);
      });
  }, [wordToGuess]);

  return (
    <div>
      {error ? <p>{error}</p> : <p>Word to Guess: {wordToGuess}</p>}
    </div>
  );
}

export default Words;
