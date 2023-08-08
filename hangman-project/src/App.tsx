import { useState } from 'react';
import './App.css'
import words from './randomTestWords.json'

function App() {

  const [randomWord, setRandomWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

console.log(randomWord);

  const loadAPI = (url: string) => {
    fetch(url)
    .then(response => response.json)
  }


  return (
    <div className="App">
      
    </div>
  )
}

export default App
