import { Grid, Button, Box, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import Image from 'next/image'
import { AppContext } from 'global/StateContext'

import React from 'react'
const OptionPanel = ({optionsData, selected, setSelected}) => {

  const handleClick = (val) => {
    console.log("val: ", val)
    setSelected(val)
  }
  
  return (
    <Grid container sx={{display:"flex", mt:5, mb:5, px:25}}>
      {
        Object.keys(optionsData).map((k)=>{
          return(
          <Grid key={k} item xs={2.4} sx={{display:"flex", textAlign:"center", flexDirection:"column", px:5}}>
            <Button 
              className={k == selected || (k === "eraser" && selected === null) ? "selected-option" : "" + "transparent-border"}  
              onClick={()=>handleClick(optionsData[k].value)} 
              sx={{display:"flex", flexDirection:"column"}}
            >
              <Box>
                <Image src={optionsData[k].image} alt="me" width="64" height="64" />
              </Box>
              <Typography variant="button" sx={{px:10}}>{k}</Typography>
            </Button>
          </Grid>)
        })
      }

    </Grid>
  )
}

export default OptionPanel