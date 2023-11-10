import React from 'react'
import BGM from '../AudioComponents/Sonic The Hedgehog OST Green Hill Zone.mp3';

const SonicBgm = () => {
  return (
    <>
      <audio autoPlay loop>
        <source src={BGM} type="audio/mpeg" />
      </audio>
    </>
  )
}

export default SonicBgm
