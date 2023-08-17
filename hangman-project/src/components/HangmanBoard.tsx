import { Box, Image, Text, position } from '@chakra-ui/react'
import React from 'react'
import HangmanBoardProps from '../models/HangmanBoardProps';
import useWords from '../hooks/useWords';



// const sonic = (
//   <Box position='absolute' right='105' top='39'>
//     <Image key={sonicParts[0]} boxSize='100px'src='/src/images/sonic head.png'/>
//     <Image key={sonicParts[1]} width='90px' margin='0' style={{ position: 'relative', right: '-5px', top: '-2px' }} src='/src/images/sonic tpose body (1).png'/>
//     <Image key={sonicParts[2]} width='140px' style={{ position: 'relative', top: '-93px', left: '-105px'}} src='/src/images/sonic tpose left arm (1).png'/>
//     <Image key={sonicParts[3]} width='140px' style={{ position: 'relative', top: '-183px', left: '63px'}} src='/src/images/sonic tpose right arm (1).png'/>
//     <Image key={sonicParts[4]} width='50px' style={{ position: 'relative', top: '-185px', left: '-2px'}} height='100' src='/src/images/sonic tpose left leg (1).png'/>
//     <Image key={sonicParts[5]} width='50px' style={{ position: 'relative', top: '-285px', left: '50px'}} height='100' src='/src/images/sonic tpose right leg (1).png'/>
//   </Box>
// )
const sonicHead = (
  <Box position='absolute' right='145' top='39'>
    <Image boxSize='100px'src='/src/images/sonic head.png'/>
  </Box>
)
const sonicBody = (
  <Box position='absolute' right='155' top='138'>
    <Image width='90px' margin='0' style={{ position: 'relative', right: '-5px', top: '-2px' }} src='/src/images/sonic tpose body (1).png'/>
  </Box>
)
const sonicLeftArm = (
  <Box position='absolute' right='105' top='185'>
    <Image width='140px' style={{ position: 'relative', top: '-93px', left: '-105px'}} src='/src/images/sonic tpose left arm (1).png'/>
  </Box>
)
const sonicRightArm = (
  <Box position='absolute' right='105' top='275'>
    <Image width='140px' style={{ position: 'relative', top: '-183px', left: '63px'}} src='/src/images/sonic tpose right arm (1).png'/>
  </Box>
)
const sonicLeftLeg = (
  <Box position='absolute' right='195' top='367'>
    <Image width='50px' style={{ position: 'relative', top: '-185px', left: '-2px'}} height='100' src='/src/images/sonic tpose left leg (1).png'/>
  </Box>
)
const sonicRightLeg = (
  <Box position='absolute' right='195' top='466'>
    <Image width='50px' style={{ position: 'relative', top: '-285px', left: '50px'}} height='100' src='/src/images/sonic tpose right leg (1).png'/>
  </Box>
)

// const sonicHead = (
//   <Box position='absolute' right='145' top='39'>
//     <Image boxSize='100px'src='/src/images/sonic head.png'/>
//   </Box>
// )
// const sonicBody = (
//   <Box position='absolute' right='155' top='138'>
//     <Image width='90px' margin='0' style={{ position: 'relative', right: '-5px', top: '-2px' }} src='/src/images/sonic tpose body (1).png'/>
//   </Box>
// )
// const sonicLeftArm = (
//   <Box position='absolute' right='105' top='185'>
//     <Image width='140px' style={{ position: 'relative', top: '-93px', left: '-105px'}} src='/src/images/sonic tpose left arm (1).png'/>
//   </Box>
// )
// const sonicRightArm = (
//   <Box position='absolute' right='105' top='275'>
//     <Image width='140px' style={{ position: 'relative', top: '-183px', left: '63px'}} src='/src/images/sonic tpose right arm (1).png'/>
//   </Box>
// )
// const sonicLeftLeg = (
//   <Box position='absolute' right='195' top='367'>
//     <Image width='50px' style={{ position: 'relative', top: '-185px', left: '-2px'}} height='100' src='/src/images/sonic tpose left leg (1).png'/>
//   </Box>
// )
// const sonicRightLeg = (
//   <Box position='absolute' right='195' top='466'>
//     <Image width='50px' style={{ position: 'relative', top: '-285px', left: '50px'}} height='100' src='/src/images/sonic tpose right leg (1).png'/>
//   </Box>
// )

const sonicParts = [sonicHead, sonicBody, sonicLeftArm, sonicRightArm, sonicLeftLeg, sonicRightLeg];



const HangmanBoard = ( { numberGuesses, deathCounter, isLoser, winnerCounter, isWinner }:HangmanBoardProps) => {
  

  return (
      <Box style={{ position: "relative", marginBottom:'10px'}}>
        {deathCounter === 2 && isLoser ? 
          <Box position='absolute' right='150' top='39'>
            <Image boxSize='100px' src='/src/images/sonic ded.png'/>
          </Box>
          : deathCounter >= 3 && isLoser ? 
            <Box position='absolute' right='49' top='39'>
              <Image boxSize='300px' src='/src/images/coffin.png'/>
            </Box>
          : winnerCounter === 2 && isWinner ? 
            <Box position='absolute' right='49' top='39'>
              <Image boxSize='300px' src='/src/images/dancing sonic.gif'/>
            </Box>
          : winnerCounter >= 3 && isWinner ? 
            <Box position='absolute' right='49' top='39'>
              <Image boxSize='300px' src='/src/images/coffin.png'/>
            </Box>

          : sonicParts.slice(0, numberGuesses)}
        {/* {sonicParts.slice(0, numberGuesses)} */}
        {/* {sonicHead}
        {sonicBody}
        {sonicLeftArm}
        {sonicRightArm}
        {sonicLeftLeg}
        {sonicRightLeg} */}
        <Box
          style={{
            height: "50px",
            width: "10px",
            background: "gold",
            position: "absolute",
            top: 0,
            right: 190,
            border: "1px solid blue"
          }}
        />
        <Box
          style={{
            height: "10px",
            width: "250px",
            background: "gold",
            marginLeft: "120px",
            border: "1px solid blue"
            
          }}
        />
        <Box
          style={{
            height: "400px",
            width: "10px",
            background: "gold",
            marginLeft: "120px",
            border: "1px solid blue"
          }}
        />
      </Box>
  )
}

export default HangmanBoard
