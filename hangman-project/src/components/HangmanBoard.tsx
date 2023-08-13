import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const sonicHead = (
  <Box>
    <Image boxSize='100px' src='/src/images/sonic head.png'/>
  </Box>
)

const sonicBody = (
  <Box>
    <Image width='100px' src='/src/images/sonic tpose body (1).png'/>
  </Box>
)

const sonicLeftArm = (
  <Box>
    <Image width='100px' src='/src/images/sonic tpose left arm (1).png'/>
  </Box>
)

const sonicRightArm = (
  <Box>
    <Image width='100px' src='/src/images/sonic tpose right arm (1).png'/>
  </Box>
)

const sonicLeftLeg = (
  <Box>
    <Image width='100px' src='/src/images/sonic tpose left leg (1).png'/>
  </Box>
)

const sonicRightLeg = (
  <Box>
    <Image width='100px' src='/src/images/sonic tpose right leg (1).png'/>
  </Box>
)



const HangmanBoard = () => {
  return (
      <Box style={{ position: "relative" }}>
        {sonicHead}
        {sonicBody}
        {sonicLeftArm}
        {sonicRightArm}
        {sonicLeftLeg}
        {sonicRightLeg}
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
