import { Button, Grid, GridItem, Box, Image } from "@chakra-ui/react"
import ButtonLettersProp from "../models/ButtonLettersProp";

const ButtonLetters = ( { active, inactive, addLetters }:ButtonLettersProp ) => {

    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]



    return (
        <Grid templateColumns="repeat(auto-fit, minmax(50px, 1fr))" gap={"4"}>
            
          {letters.map((letter) => (
            <Button
              // colorScheme="blue"
              onClick={() => addLetters(letter)}
              key={letter.toUpperCase()}
              padding='0'
              width='70px'
              height='70px'
              fontSize='1rem'
              bg='transparent'
              border='none'
            >
              {/* {letter} */}
              <Image
                src="/src/images/slime_noface.png"
                alt={letter}
                style={{ width: "100%", height: "100%"}}
              />
              <Box
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)", // Adjust the centering
                  fontSize: "30px",
                  color: "white"
                }}
                className="bubble"
              >
                {letter}
              </Box>
            </Button>
          ))}
        </Grid>
      );
}

export default ButtonLetters
