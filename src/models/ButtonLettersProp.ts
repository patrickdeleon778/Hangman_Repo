export default interface ButtonLettersProp {
    correct: string[] // correct prop to pass down the correct letters
    inactive: string[] // inactive prop to pass down the inactive letters 
    addLetters: (letter: string) => void
}