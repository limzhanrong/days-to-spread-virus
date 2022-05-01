import React, { useEffect, useState, useContext } from 'react'
import Cell from '/components/grid/Cell'
import CustomSpeedDial from 'components/global/CustomSpeedDial'

import { Grid } from '@mui/material'
import { AppContext } from 'global/StateContext'


// {rowSize = 15, colSize = 35}
const CellGrid = ({rowSize = 15, colSize = 35}) => {
  const { optionsData, useSelectedState } = useContext(AppContext)
  const [selected, setSelected] = useSelectedState

  const [grid, setGrid] = useState(generateEmptyArray(rowSize, colSize))
  const [mouseDown, setMouseDown] = useState(false)

  const blockers = new Set(["virus", "wall"]);


  useEffect(()=>{
    // setGrid(generateEmptyArray(size))
  }, [rowSize, colSize])


  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))


  const runAlgorithm = async () => {
    let s = [[]]
    for(let r = 0; r < grid.length; r++){
      for(let c = 0; c < grid[r].length; c++){
        if(grid[r][c] === "virus" || grid[r][c] === "sick"){
          s[0].push([r,c])
        }
        
      }
    }

    while(s.length > 0){
      let curr = s.pop()
      
      let nextLevel = []
      while(curr.length > 0){
        let [r, c] = curr.pop()
        let newCoords = [[r-1,c], [r-1,c+1], [r,c+1], [r+1,c+1], [r+1,c], [r+1,c-1], [r,c-1], [r-1,c-1]] //Up -> Clockwise
        
        for(let newCoord of newCoords){
          let newRow = newCoord[0]
          let newCol = newCoord[1]
          if(isInBound(grid, newRow, newCol) && !blockers.has(grid[newRow][newCol])){
            if(grid[newRow][newCol] === "healthy" || grid[newRow][newCol] === "sick"){
              grid[newRow][newCol] = "sick"
            }else{
              grid[newRow][newCol] = "virus"
            }
            nextLevel.push( [newRow, newCol] )
          }
        }
        
      }
      setGrid([...grid])
      await wait(500)
      if(nextLevel.length > 0){
        s.push(nextLevel)
      }
    }
  }

  const handleReset = () => {
    setGrid(generateEmptyArray(rowSize, colSize))
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
      <Grid container alignItems="center" justifyContent="center" direction="column" onMouseLeave={handleMouseUp}>
      {grid.map((row, r)=>{
          return (
            <Grid key={"row" + r} item xs={12}>
            {
            row.map((item, c)=>{
              return (
              <Cell 
                key={"col" + c} 
                row={r} 
                col={c} 
                val={grid[r][c]} 
                selected={selected} 
                optionsData={optionsData}
                handleMouseDown={handleMouseDown}
                handleMouseOver={handleMouseOver}
                handleMouseUp={handleMouseUp}
              >
              </Cell>)})
            }
            </Grid>
          )
      })}
    </Grid>
    <CustomSpeedDial handleRun={runAlgorithm} handleReset={handleReset}></CustomSpeedDial>
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

const isInBound = (arr, r, c) =>{
  return r >= 0 && c >= 0 && r < arr.length && c < arr[0].length;
}


export default CellGrid