import OptionPanel from 'components/grid/OptionPanel'
import React, { useState, useContext, useEffect } from 'react'
import CellGrid from '/components/grid/CellGrid'
import { AppContext } from 'global/StateContext'

const Game = () => {
  const { optionsData, useSelectedState } = useContext(AppContext)
  const [selected, setSelected] = useSelectedState

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