import React, {useContext} from 'react'
import Cell from '/components/grid/Cell'
import { Grid } from '@mui/material'
import { AppContext } from 'global/StateContext'


const CellGenerator = ({grid, handleMouseDown, handleMouseOver, handleMouseUp}) => {
  const { optionsData, useSelectedState } = useContext(AppContext)
  const [selected, setSelected] = useSelectedState

  return (
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
                  {grid[r][c]}
              </Cell>)})
            }
            </Grid>
          )
      })}
    </Grid>
  )
}

export default CellGenerator