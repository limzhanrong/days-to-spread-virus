import React from 'react'

const Cell = ({row, col, val, handleMouseDown, handleMouseOver, handleMouseUp, optionsData, selected}) => {

  return (
    <div
      id={"row"+row+"col"+col}
      style={{  
        backgroundImage: "url(" + ((val in optionsData) ? optionsData[val]?.image : "") + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      onMouseDown={()=>handleMouseDown(row,col,selected)} 
      onMouseEnter={()=>handleMouseOver(row,col,selected)}
      onMouseUp={()=>handleMouseUp()}
      className="cell"
      >
    </div>
  )
}

export default Cell