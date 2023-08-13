import { Button, Grid, GridItem, Box, Image } from "@chakra-ui/react"
import ButtonLettersProp from "../models/ButtonLettersProp";

const ButtonLetters = ( { active, inactive, addLetters }:ButtonLettersProp ) => {

    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



    return (
      <Grid templateColumns="repeat(auto-fit, minmax(50px, 1fr))" gap={"4"}>
        {letters.map((letter) => {
          // const isLetterActive = active.includes(letter);
          // const isLetterInactive = active.includes(letter);

          return (
            <Button
              onClick={() => addLetters(letter)}
              key={letter.toUpperCase()}
              padding="0"
              width="70px"
              height="70px"
              fontSize="1rem"
              border="none"
            >
              <Image
                src="/src/images/slime_noface.png"
                alt={letter}
                style={{ width: "100%", height: "100%" }}
              />
              <Box
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "30px",
                  color: "white",
                }}
                className="bubble"
              >
                {letter}
              </Box>
            </Button>
          );
        })}
      </Grid>
    );
  };

export default ButtonLetters
