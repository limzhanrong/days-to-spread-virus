import React, { useEffect, useState } from 'react'
import CellGenerator from './CellGenerator'


const CellGrid = ({rowSize = 15, colSize = 35}) => {
  // const [size, setSize] = useState()
  const [grid, setGrid] = useState(generateEmptyArray(rowSize, colSize))
  const [mouseDown, setMouseDown] = useState(false)

  useEffect(()=>{
    // setGrid(generateEmptyArray(size))
  }, [rowSize, colSize])


  const runAlgorithm = () => {
    
  }
  
  const handleMouseDown = (r,c,val) => {
    grid[r][c] = val
    setMouseDown(true)
    setGrid([...grid])
  }

  const handleMouseOver = (r,c,val) => {
    if(mouseDown){
      grid[r][c] = val
      setGrid([...grid])
    }
  }

  const handleMouseUp = () => {
    setMouseDown(false)
  }


  return (
    <div className="grid-container">
      <CellGenerator 
        grid={grid} 
        handleMouseDown={handleMouseDown}
        handleMouseOver={handleMouseOver}
        handleMouseUp={handleMouseUp}
      ></CellGenerator>
    </div>
  )
}

const generateEmptyArray = (rowSize, colSize) => {
  const arr = []
  for(var i=0; i< rowSize; i++){
    arr[i] = []
    for(var j=0;j<colSize;j++){
      arr[i][j] = null;
    }
  }
  return arr
}


export default CellGrid