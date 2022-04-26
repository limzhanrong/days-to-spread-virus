import { Grid, Button, Box, Typography } from '@mui/material'
import Image from 'next/image'

import React from 'react'
const OptionPanel = () => {
  return (
    <Grid container sx={{display:"flex", mt:5, mb:5, px:25}}>
      <Grid item xs={3} sx={{display:"flex", textAlign:"center", flexDirection:"column", px:10}}>
        <Button sx={{display:"flex", flexDirection:"column"}}>
          <Box>
            <Image src="/healthy.png" alt="me" width="64" height="64" />
          </Box> 
          <Typography variant="button" sx={{px:10}}>Healthy</Typography>
        </Button>
      </Grid>
      <Grid item xs={3} sx={{display:"flex", textAlign:"center", flexDirection:"column", px:10}}>
        <Button sx={{display:"flex", flexDirection:"column"}}>
          <Box>
            <Image src="/sick.png" alt="me" width="64" height="64" />
          </Box> 
          <Typography variant="button" sx={{px:10}}>Healthy</Typography>
        </Button>
      </Grid>
      <Grid item xs={3} sx={{display:"flex", textAlign:"center", flexDirection:"column", px:10}}>
        <Button sx={{display:"flex", flexDirection:"column"}}>
          <Box>
            <Image src="/virus.png" alt="me" width="64" height="64" />
          </Box> 
          <Typography variant="button" sx={{px:10}}>Virus</Typography>
        </Button>
      </Grid>
      <Grid item xs={3} sx={{display:"flex", textAlign:"center", flexDirection:"column", px:10}}>
        <Button sx={{display:"flex", flexDirection:"column"}}>
          <Box>
            <Image src="/wall.png" alt="me" width="64" height="64" />
          </Box> 
          <Typography variant="button" sx={{px:10}}>Wall</Typography>
        </Button>
      </Grid>
    </Grid>
  )
}

export default OptionPanel