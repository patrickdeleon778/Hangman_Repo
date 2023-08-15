import { Box, Image, Text, position } from '@chakra-ui/react'
import React from 'react'

const sonic = (
  <Box position='absolute' right='105' top='39'>
    <Image boxSize='100px'src='/src/images/sonic head.png'/>
    <Image width='90px' margin='0' style={{ position: 'relative', right: '-5px', top: '-2px' }} src='/src/images/sonic tpose body (1).png'/>
    <Image width='140px' style={{ position: 'relative', top: '-93px', left: '-105px'}} src='/src/images/sonic tpose left arm (1).png'/>
    <Image width='140px' style={{ position: 'relative', top: '-183px', left: '63px'}} src='/src/images/sonic tpose right arm (1).png'/>
    <Image width='50px' style={{ position: 'relative', top: '-185px', left: '-2px'}} height='100' src='/src/images/sonic tpose left leg (1).png'/>
    <Image width='50px' style={{ position: 'relative', top: '-285px', left: '50px'}} height='100' src='/src/images/sonic tpose right leg (1).png'/>
  </Box>
)


const HangmanBoard = () => {
  return (
      <Box style={{ position: "relative" }}>
        {sonic}
        <Box
          style={{
            height: "50px",
            width: "10px",
            background: "black",
            position: "absolute",
            top: 0,
            right: 190,
          }}
        />
        <Box
          style={{
            height: "10px",
            width: "250px",
            background: "black",
            marginLeft: "120px",
          }}
        />
        <Box
          style={{
            height: "400px",
            width: "10px",
            background: "black",
            marginLeft: "120px",
          }}
        />
      </Box>
  )
}

export default HangmanBoard
