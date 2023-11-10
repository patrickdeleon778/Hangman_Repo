import React from 'react'
import BGM from '../AudioComponents/Sonic_The_Hedgehog_OST_Green_Hill_Zone.mp3';

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
