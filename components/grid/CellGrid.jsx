import React, { useEffect, useState } from 'react'
import CellGenerator from './CellGenerator'


const CellGrid = ({rowSize = 10, colSize = 20}) => {
  // const [size, setSize] = useState()
  const [grid, setGrid] = useState(generateEmptyArray(rowSize, colSize))

  useEffect(()=>{
    // setGrid(generateEmptyArray(size))
  }, [rowSize, colSize])

  const handleClick = (r,c) => {
    grid[r][c] += 1
    setGrid([...grid])
  }


  return (
    <div className="grid-container">
      <CellGenerator grid={grid} handleClick={handleClick}></CellGenerator>
    </div>
  )
}

const generateEmptyArray = (rowSize, colSize) => {
  const arr = []
  for(var i=0; i< rowSize; i++){
    arr[i] = []
    for(var j=0;j<colSize;j++){
      arr[i][j] = 0;
    }
  }
  return arr
}


export default CellGrid