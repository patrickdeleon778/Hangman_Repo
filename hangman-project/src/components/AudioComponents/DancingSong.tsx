import React from 'react'
import boosted from '../AudioComponents/FORTNITE DEFAULT DANCE BASS BOOSTED.mp3'

const DancingSong = () => {
  return (
    <>
      <audio autoPlay>
        <source src={boosted} type="audio/mpeg" />
      </audio>
    </>
  )
}

export default DancingSong
