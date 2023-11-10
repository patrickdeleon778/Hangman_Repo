export default interface HangmanBoardProps {
    numberGuesses: number // prop to pass down the number of guesses
    winnerCounter: number // prop to pass down the number of wins
    deathCounter: number // // prop to pass down the number of loses
    isLoser: boolean // prop to pass down if someone is a loser
    isWinner: boolean // prop to pass down if someone is a winner
}