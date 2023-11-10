import React from 'react'
import boosted from '../AudioComponents/FORTNITE_DEFAULT_DANCE_BASS_BOOSTED.mp3'

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
