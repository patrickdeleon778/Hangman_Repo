import { Button, Grid, GridItem, Box, Image } from "@chakra-ui/react"
import ButtonLettersProp from "../models/ButtonLettersProp";
import boing from '../audio/boing.mp3'

import eggman from "../images/eggman.png";
import sanic from "../images/sanic.png";
import sonicRing from "../images/Sonic_ring.png";
import signStick from "../images/sign on a stick.png";
import ring from "../images/Sonic_ring.png";
import sonicWin from "../images/sonic_win.png";
import sonicDEAD from "../images/sonic_dead-removebg-preview.png";

const ButtonLetters = ( { correct, inactive, addLetters }:ButtonLettersProp ) => {

    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const playBoing = () => { // function for the sound effect when you press a square
          const sound = new Audio(boing);
          sound.play();
  }  

    return (
      <Grid templateColumns="repeat(auto-fit, minmax(50px, 1fr))" gap={"2"} background='gold' padding='2' marginBottom='4' borderRadius='10' border='4px solid blue'>
        {letters.map((letter) => {
          const isLetterCorrect = correct.includes(letter);
          const isLetterInactive = inactive.includes(letter);

          return (
            <Button
              onClick={() => {addLetters(letter); playBoing();}}
              disabled={isLetterInactive}
              key={letter.toUpperCase()}
              padding="0"
              width="60px"
              height="60px"
              fontSize="1rem"
              border="none"
              background='transparent'
            >
              {isLetterInactive ? <Image src={sonicDEAD} alt={letter}style={{ width: "100%", height: "100%"}}/> : 
              isLetterCorrect ? <Image src={sonicWin} alt={letter}style={{ width: "100%", height: "100%"}}/> :
              <Image src={ring} alt={letter}style={{ width: "100%", height: "100%" }}/> }


              {/* <Image
                src="/src/images/Sonic_ring.png"
                alt={letter}
                style={{ width: "100%", height: "100%" }}
              /> */}
              <Box
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "30px",
                  color: isLetterInactive ? 'red' :
                         isLetterCorrect ? 'green' : 'goldenrod',
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
