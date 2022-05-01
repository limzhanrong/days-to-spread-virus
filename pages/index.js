import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Autocomplete, TextField } from '@mui/material'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Virus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={rows}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      /> */}
    </div>
  )
}
