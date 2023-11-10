import React from 'react'
import oof from '../AudioComponents/Roblox OOF Sound Effect - Bass Boosted-[AudioTrimmer.com].mp3';

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
