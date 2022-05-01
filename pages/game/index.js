import OptionPanel from 'components/grid/OptionPanel'
import React, { useState, useContext, useEffect } from 'react'
import CellGrid from '/components/grid/CellGrid'
import { AppContext } from 'global/StateContext'
import CustomSpeedDial from 'components/global/CustomSpeedDial'


const Game = () => {
  const { optionsData, useSelectedState, useRunningState } = useContext(AppContext)
  const [selected, setSelected] = useSelectedState
  const [running, setRunning] = useRunningState


  useEffect(()=>{
    console.log(optionsData)
  }, [optionsData])
  
  return (
    <>
      <OptionPanel optionsData={optionsData} selected={selected} setSelected={setSelected}></OptionPanel>
      <CellGrid></CellGrid>
      
      {/* <a href="https://www.flaticon.com/free-icons/patient" title="patient icons">Patient icons created by Freepik - Flaticon</a> */}
    </> 
  )
}

export default Game