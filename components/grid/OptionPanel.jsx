import { Grid, Button, Box, Typography, Avatar, Slider } from '@mui/material'
import Image from 'next/image'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import OperationButton from './OperationButton';
import DropDownButton from './DropDownButton'
import PauseIcon from '@mui/icons-material/Pause';

const OptionPanel = ({optionsData, selected, setSelected, count, handleRun, handleReset, handleClear, handleStop, runningState, speed, setSpeed, speedRef}) => {

  const handleClick = (val) => {
    console.log("val: ", val)
    setSelected(val)
  }

  const changeSpeed = (e) =>{
    setSpeed(e.target.value)
    speedRef.current = e.target.value
  }

  const clearOptions = [
    {name: "Healthy",image:"/healthy.png", function: ()=>handleClear("healthy")},
    {name: "Infected",image:"/sick.png", function: ()=>handleClear("sick")},
    {name: "Virus", image:"/virus.png", function: ()=>handleClear("virus")},
    {name: "Walls",image:"/wall.png", function: ()=>handleClear("wall")}
  ]

  const resetOptions = [
    {name:"Reset All", function: ()=>handleReset()},
    {name:"Reset Days", function: ()=>handleClear("day")},
    {name:"Cure All", function: ()=>handleClear("sick", "healthy")}
  ]
  
  return (
    <Grid sx={{display:"flex", px:20, mt:5, mb:5}}>
      <Grid container item lg={5} md={12} sx={{display:"flex"}}>
        {
          Object.keys(optionsData).map((k)=>{
            return(
            <Grid key={k} item lg={2.3} xs={3} sx={{display:"flex", textAlign:"center", flexDirection:"column"}}>
              <Button 
                className={k == selected || (k === "eraser" && selected === null) ? "selected-option" : "" + "transparent-border"}  
                onClick={()=>handleClick(optionsData[k].value)} 
                sx={{display:"flex", flexDirection:"column", maxWidth:"100%"}}
              >
                <Box>
                  <Image src={optionsData[k].image} alt="me" width="64rem" height="64rem" />
                </Box>
                <Typography variant="button">{k}</Typography>
              </Button>
            </Grid>)
          })
        }
      </Grid>

      {/* Count Sections */}
      <Grid container item lg={2} md={6} xs={12} sx={{display:"flex", textAlign:"center"}}>
        <Box sx={{ mx:"auto", my:"auto"}}>
        <Grid container item xs={12}>
          <Box item xs={6} sx={{display:"flex"}}>
            <Avatar sx={{ width: 36, height: 36, my:"auto" }} variant="square" src="/healthy.png" />
            <Typography sx={{ mx:1, my:"auto", minWidth:30}} variant="subtitle1">{count.healthy}</Typography>
          </Box>
          <Box item xs={6} sx={{display:"flex"}}>
            <Avatar sx={{ width: 36, height: 36, my:"auto" }} variant="square" src="/sick.png" />
            <Typography sx={{mx:1, my:"auto", minWidth:30}} variant="subtitle1">{count.sick}</Typography>
          </Box>
        </Grid>

        <Grid container item xs={12}>
          <Box item xs={6} sx={{display:"flex"}}>
            <Avatar sx={{ width: 36, height: 36, my:"auto" }} variant="square" src="/virus.png" />
            <Typography sx={{mx:1, my:"auto", minWidth:30}} variant="subtitle1">{count.virus}</Typography>
          </Box>
          <Box item xs={6} sx={{display:"flex"}}>
            <Avatar sx={{ width: 36, height: 36, my:"auto" }} variant="square" src="/wall.png" />
            <Typography sx={{mx:1, my:"auto", minWidth:30}} variant="subtitle1">{count.wall}</Typography>
          </Box>
        </Grid>
        </Box>
             
      </Grid>

      {/* Day Counter */}
      <Grid container item lg={1} md={6} xs={12}>
        <div style={{position: 'relative', width: '200px', height: '100px', textAlign:"center", marginTop:7}}>
          <CalendarTodayIcon style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}} />
          <Typography variant="h4" style={{position:"absolute",top:"65%", left:"50%",transform: "translate(-50%, -50%)",margin: 0}}>
            {count.days}
          </Typography>
        </div>
      </Grid>
      {/* Buttons */}
      <Grid item container lg={2.5} sx={{display:"flex", justifyContent:"center"}}>
        <DropDownButton text={"Reset"} color={"error"} options={resetOptions} IconComponent={<RestartAltIcon/>}></DropDownButton>
        <DropDownButton text={"Clear"} color={"warning"} options={clearOptions} IconComponent={<DeleteIcon/>}></DropDownButton>
      {!runningState? 
        <OperationButton handleClick={handleRun} color={"success"} text="Run" IconComponent={<SendIcon/>}></OperationButton>
        :<OperationButton handleClick={handleStop} color={"error"} text="Stop" IconComponent={<PauseIcon/>}></OperationButton>}
      </Grid>
      <Grid container item lg={1} sx={{display:"flex", my:"auto"}}>
      <Typography gutterBottom>Speed</Typography>
        <Slider
          size="small"
          defaultValue={speed}
          value={speed}
          onChange={(e)=>changeSpeed(e)}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </Grid>
    </Grid>
    
  )
}

export default OptionPanel