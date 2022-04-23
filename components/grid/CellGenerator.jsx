import React from 'react'
import Cell from '/components/grid/Cell'
import { Grid } from '@mui/material'

const CellGenerator = ({grid, handleClick}) => {
  return (
    <Grid container>
      {grid.map((row, r)=>{
          return (
            <Grid key={r} item xs={12}>
            {
            row.map((item, c)=>{return <Cell key={c} row={r} col={c} val={grid[r][c]} handleClick={handleClick}>{grid[r][c]}</Cell>})
            }
            </Grid>
          )
      })}
    </Grid>
  )
}

export default CellGenerator