import { Button, Grid, GridItem } from "@chakra-ui/react"

const ButtonLetters = () => {

    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



    return (
        <Grid templateColumns="repeat(auto-fit, minmax(50px, 1fr))" gap={"1"}>
            
          {letters.map((letter) => (
            <Button
              colorScheme="blue"
              key={letter}
              padding='0'
              width='50px'
              height='50px'
              fontSize='1rem'
            >
              {letter}
            </Button>
          ))}
        </Grid>
      );
}

export default ButtonLetters
