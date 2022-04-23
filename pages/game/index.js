import React, { useState } from 'react'
import Cell from '/components/grid/Cell'
import CellGrid from '/components/grid/CellGrid'

const Game = () => {
  return (
    <>
      <CellGrid rowSize={6} colSize={3}></CellGrid>
    </>
  )
}

export default Game