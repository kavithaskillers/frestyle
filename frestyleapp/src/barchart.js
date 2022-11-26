import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import BarChart from 'react-bar-chart';


function BarChartModule() {

    const data = [
        {text: 'kavitha', value: 672396}, 
        {text: 'darshan', value: 556904},
        {text: 'arunachalam',value: 556528},
        {text: 'divya' , value: 519524},
        {text: 'reyanath', value: 425944}
      ];

      
const margin = {top: 20, right: 20, bottom: 30, left: 40};


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return(
        <>
        <h1>Graph Module</h1>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>

          <BarChart ylabel='Marks'
                  width={600}
                  height={500}
                  margin={margin}
                  data={data}
                 />

          </Item>
        </Grid>
      </Grid>
    </Box>
        </>
    )
      
    
    
}

export default BarChartModule;

