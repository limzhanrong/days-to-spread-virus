import React from 'react'
import { Button } from '@mui/material'

const OperationButton = ({handleClick, text, IconComponent,color="primary"}) => {
  return (
    <Button 
        variant="contained" 
        onClick={handleClick}
        color={color}
        sx={{
            justifyContent: "flex-start",
            maxWidth: '300px', 
            maxHeight: '30px', 
            minWidth: '130px',
            minHeight: '30px',
        }} 
        startIcon={IconComponent}
    >
        {text}
    </Button>
  )
}

export default OperationButton