import OptionPanel from 'components/grid/OptionPanel'
import React, { useState } from 'react'
import CellGrid from '/components/grid/CellGrid'

const Game = () => {
  const [selected, setSelected] = useState(null)
  const data = {
    "healthy": {
      image:"/healthy.png"
    },
    "sick":{
      image:"/sick.png"
    },
    virus:{
      image:"/virus.png"
    },
    wall:{
      image:"/wall.png"
    }
  }
  return (
    <>
      <OptionPanel></OptionPanel>
      <CellGrid></CellGrid>
      {/* <a href="https://www.flaticon.com/free-icons/patient" title="patient icons">Patient icons created by Freepik - Flaticon</a> */}
    </> 
  )
}

export default Game