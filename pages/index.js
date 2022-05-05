import React, { useState } from 'react'
import CellGrid from '/components/grid/CellGrid'
import CustomSnackbar from 'components/global/CustomSnackbar'
import Head from 'next/head'



export default function Home() {
  const [selected, setSelected] = useState("healthy")
  const [open, setOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState("")
  const [severity, setSeverity] = useState("success")
  
  const [count, setCount] = useState(
    {
    "healthy":0,
    "sick":0,
    "virus":0,
    "wall":0,
    "days":0
  })
  const optionsData = {
    "healthy": {
      value:"healthy",
      image:"/healthy.png"
    },
    "sick":{
      value:"sick",
      image:"/sick.png"
    },
    "virus":{
      value:"virus",
      image:"/virus.png"
    },
    "wall":{
      value:"wall",
      image:"/wall.png"
    },
    "eraser":{
      value:null,
      image:"/eraser.png"
    }
  }

  const openSnackbar = (message, severity) => {
    setSnackbarMessage(message)
    setSeverity(severity)
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  return (
    <>
      <Head>
        <title>Virus Simulator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/virus.png" />

      </Head>
      <CellGrid
        selected={selected}
        setSelected={setSelected}
        optionsData={optionsData}
        count={count}
        setCount={setCount}
        openSnackbar={openSnackbar}
      >
      </CellGrid>
      <CustomSnackbar severity={severity} message={snackbarMessage} open={open} handleClose={handleClose}></CustomSnackbar>
      
      {/* <a href="https://www.flaticon.com/free-icons/patient" title="patient icons">Patient icons created by Freepik - Flaticon</a> */}
    </> 
  )
}
