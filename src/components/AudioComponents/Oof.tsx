import React from 'react'
import oof from '../AudioComponents/Roblox_Oof.mp3';

const Oof = () => {
  return (
    <>
      <audio autoPlay>
        <source src={oof} type="audio/mpeg" />
      </audio>
    </>
  )
}

export default Oof
