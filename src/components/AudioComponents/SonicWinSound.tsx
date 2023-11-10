import React from 'react'
import win from '../AudioComponents/sonic_win_sound.mp3'

const SonicWinSound = () => {
  return (
    <>
      <audio autoPlay>
        <source src={win} type="audio/mpeg" />
      </audio>
    </>
  )
}

export default SonicWinSound
