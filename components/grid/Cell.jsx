import React, {useEffect, useState} from 'react'
import styles from '/styles/Home.module.css'

const Cell = ({row, col, val, handleClick}) => {

  return (
    <div onClick={()=>handleClick(row,col)} className={styles.cell}>{val}</div>
  )
}

export default Cell