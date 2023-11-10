import React from 'react'
import lose from '../AudioComponents/sonic_lose_sound.mp3';

const SonicLoseSound = () => {
  return (
    <>
      <audio autoPlay>
        <source src={lose} type="audio/mpeg" />
      </audio>
    </>
  )
}

export default SonicLoseSound
