import { Box, Button, Text, Image } from "@chakra-ui/react";
import ResetProps from "../models/ResetProps";

import uganda from '../images/uganda.png';

const Reset = ( {onReset, winner}:ResetProps ) => {

    // const {deadCount, setDeadCount} = useWords();

    

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textTransform="uppercase"
      fontFamily="sonicFont"
      fontSize="30px"
      gap="10"
      color="goldenrod"
      marginTop='36'
    >
        <Text 
            bg='gold'
            margin='0'
            borderRadius='10px'
            border='2px solid blue'
            px='2'
            pt='1'
            style={{
                WebkitTextStroke: '2px blue',
            }}
        >
            {winner ? "YOU WIN! GOOD JOB!" : "YOU LOST! YOU SUCK!"}</Text> 
      <Button onClick={onReset} width='100px' height='70px' bg='gold' border='2px solid blue'>
        <Image src={uganda} style={{ width: "100%", height: "100%" }}/>
      </Button>
    </Box>
  );
};

export default Reset;
