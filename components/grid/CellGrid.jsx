import React, { useEffect, useState, useRef } from 'react'
import Cell from '/components/grid/Cell'
import OptionPanel from './OptionPanel'

import { TableRow, TableBody, Table, TableCell, Container } from '@mui/material'


// {rowSize = 15, colSize = 35}
const CellGrid = ({rowSize = 15, colSize = 35, selected,setSelected, optionsData, count, setCount}) => {

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


  const [grid, setGrid] = useState(generateEmptyArray(rowSize, colSize))
  const [mouseDown, setMouseDown] = useState(false)
  const isRunningRef = useRef(false);
  const [runningState, setRunningState] = useState(false)

  // useEffect(()=>{
  //   // setGrid(generateEmptyArray(size))
  // }, [rowSize, colSize])

  const handleReset = () => {
    if(isRunningRef.current === true){
      return
    }
    for(let k in count){
      count[k] = 0
    }
    setCount({...count})
    setGrid(generateEmptyArray(rowSize, colSize))
  }

  const handleMouseDown = (r,c,val) => {
    if(runningState === true){
      alert("unable to click when running")
      return
    }
    setMouseDown(true)
    if(grid[r][c] !== val){
      updateCountAndGrid(r,c,val)
    }
  }

  const handleMouseOver = (r,c,val) => {
    if(mouseDown && grid[r][c] !== val){
      updateCountAndGrid(r,c,val)
    }
  }

  const updateCountAndGrid = (r,c,val) => {
    if(grid[r][c] in count){
      count[grid[r][c]] -= 1
    }
    grid[r][c] = val
    setGrid([...grid])
    count[val] += 1
    setCount({...count})
  }

  const handleMouseUp = () => {
    setMouseDown(false)
  }


  
  const isInBound = (arr, r, c) =>{
    return r >= 0 && c >= 0 && r < arr.length && c < arr[0].length;
  }

  const blockers = new Set(["virus", "wall", "sick"]);

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
  
  const runAlgorithm = async (grid) => {
    let s = [[]]
    
    if(count.healthy === 0 || (count.virus === 0 && count.sick === 0) || isRunningRef.current === true){
      alert("invalid")
      return
    }
    if(isRunningRef.current === true){
      isRunningRef.current = false
      alert("already running")
      return
    }
    isRunningRef.current = !isRunningRef.current
    setRunningState(true)

    for(let r = 0; r < grid.length; r++){
      for(let c = 0; c < grid[r].length; c++){
        if(grid[r][c] === "virus" || grid[r][c] === "sick"){
          s[0].push([r,c])
        }
      }
    }
    while(s.length > 0 && isRunningRef.current === true){
      let curr = s.pop()
      
      let nextLevel = []
      if(count["healthy"]>=1){
        count.days += 1
      }
      while(curr.length > 0){
        let [r, c] = curr.pop()
        let newCoords = [[r-1,c], [r-1,c+1], [r,c+1], [r+1,c+1], [r+1,c], [r+1,c-1], [r,c-1], [r-1,c-1]] //Up -> Clockwise
          for(let newCoord of newCoords){
          let newRow = newCoord[0]
          let newCol = newCoord[1]
          if(isInBound(grid, newRow, newCol) && !blockers.has(grid[newRow][newCol]) ){
            let newValue = (grid[newRow][newCol] === "healthy") ? "sick-background" : "virus-background"
              let oldValue = grid[newRow][newCol]
              if(oldValue in count){
                count[oldValue] -= 1
              }
              if(newValue === "sick-background"){
                grid[newRow][newCol] = "sick"
                count["sick"] += 1
              }else{
                grid[newRow][newCol] = "virus"
                count["virus"] += 1
              }
            nextLevel.push([newRow, newCol])
          }
        }
      }
      if(nextLevel.length > 0 && count["healthy"] >= 1){
        s.push(nextLevel)
      }
      setGrid([...grid])
      setCount({...count})
      await wait(500)
    }
      isRunningRef.current = false
      setRunningState(false)
    // count.days += 1
    // setCount({...count})
    // setGrid([...grid])
    // isRunningRef.current = false
    // setRunningState(false)
  }


  const stopAlgorithm = () => {
    setRunningState(false)
    isRunningRef.current = false
  }

  const handleClear = (oldValue, newValue = null) =>{
    if(isRunningRef.current === true){
      return
    }
    for(let r = 0; r < grid.length; r++){
      for(let c = 0; c < grid[r].length; c++){
        if(grid[r][c] === oldValue){
          grid[r][c] = newValue
          count[newValue] += 1
        }
      }
    }
    setGrid([...grid])
    count[oldValue] = 0
    setCount({...count, days:0})
  }
  return (
    <>
    <OptionPanel 
        optionsData={optionsData} 
        selected={selected} 
        setSelected={setSelected}
        count={count}
        handleRun={()=>runAlgorithm(grid)}
        handleStop={()=>stopAlgorithm()}
        handleClear={handleClear}
        handleReset={handleReset}
        isRunningRef={isRunningRef}
        runningState={runningState}
      >
      </OptionPanel>
    <Container>
      
    <Table className="grid-container">
      <TableBody direction="column" onMouseLeave={handleMouseUp}>
      {grid.map((row, r)=>{
          return (
            <TableRow key={"row" + r} xs={12} sx={{ display:"flex", padding:0}}>
            {
            row.map((item, c)=>{
              return (
                <TableCell key={"row" + r + "col" + c} mx="auto"  sx={{padding:0, border:"none"}}>
                  <Cell
                    row={r} 
                    col={c} 
                    val={grid[r][c]} 
                    selected={selected} 
                    optionsData={optionsData}
                    handleMouseDown={handleMouseDown}
                    handleMouseOver={handleMouseOver}
                    handleMouseUp={handleMouseUp}
                  >
                  </Cell>
                </TableCell>)})
            }
            </TableRow>
          )
      })}
    </TableBody>
    
    </Table>
    </Container>
    </>
  )
}




export default CellGrid