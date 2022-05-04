import OptionPanel from 'components/grid/OptionPanel'
import React, { useState, useContext, useEffect } from 'react'
import CellGrid from '/components/grid/CellGrid'
import { AppContext } from 'global/StateContext'


const Game = () => {

  const [selected, setSelected] = useState("healthy")
  
  const [count, setCount] = useState(
    {
    "healthy":0,
    "sick":0,
    "virus":0,
    "wall":0,
    "days":0
  })
  const optionsData = {
    "healthy": {
      value:"healthy",
      image:"/healthy.png"
    },
    "sick":{
      value:"sick",
      image:"/sick.png"
    },
    "virus":{
      value:"virus",
      image:"/virus.png"
    },
    "wall":{
      value:"wall",
      image:"/wall.png"
    },
    "eraser":{
      value:null,
      image:"/eraser.png"
    }
  }

  // useEffect(()=>{
  //   console.log(optionsData)
  // }, [optionsData])
  
  return (
    <>
      <CellGrid
        selected={selected}
        setSelected={setSelected}
        optionsData={optionsData}
        count={count}
        setCount={setCount}
      >
      </CellGrid>
      
      {/* <a href="https://www.flaticon.com/free-icons/patient" title="patient icons">Patient icons created by Freepik - Flaticon</a> */}
    </> 
  )
}

export default Game