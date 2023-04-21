import React from 'react'
import { Grid } from '@mui/material';

function Footer() {
  return (
    <div style={{ marginTop:"-2%", paddingLeft:"2%"}}>
        <hr style={{ color:"black"}}/>
          <Grid item><p style={{fontSize:"xx-large", paddingBottom:"0.7%", marginBottom:"-0.07%", marginRight:"10%"}}>Quote Generator</p></Grid>
        <Grid container spacing={5} style={{marginRight:"8%"}}>
          <Grid item><p>Copyrights Reserved</p> </Grid>
          <Grid item><p>privacy</p> </Grid>

        </Grid>
    </div>
  )
}

export default Footer