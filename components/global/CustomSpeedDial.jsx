import React from 'react'
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';

const CustomSpeedDial = ({handleRun, handleReset}) => {

  const handleClick = () => {
    alert("hi")
  }

  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy', function: handleRun },
    { icon: <SaveIcon />, name: 'Save',function: handleReset },
  ];
  
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
    {actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        onClick={action.function}
      />
    ))}
    </SpeedDial>
  )
}

export default CustomSpeedDial