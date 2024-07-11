import React, { useEffect } from 'react'
import { useState } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "./App.css"

const App = () => {
  
  const [bmi,setBMI] = useState(0);
  const [stats,setStats] = useState({
    height:180,
    weight:100
  })

  useEffect(()=>{
    setBMI(((stats.weight)/((stats.height/100)**2)).toFixed(1))
  },[stats])

  function handleChange(e){
    setStats({
      ...stats,
      [e.target.name]:e.target.value
    })
  }
  return (
    <div>
      <h1 style={{textAlign:"center"}}>BMI calculator</h1>
      <div className='container'>
      <Box
      className="box"
      height={550}
      my={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={2}
      p={3}
      sx={{ border: '2px solid white' }}
      >
      
        <br />
        <h2 htmlFor="height">Height: {stats.height}cm</h2><br />
        <Slider onChange={handleChange} aria-label="Default" valueLabelDisplay='auto' type="range" name="height" id="height" value={stats.height} min={130} max={230}/>
        <br />
        <h2 htmlFor="weight">Weight: {stats.weight}kg</h2><br />
        <Slider onChange={handleChange} aria-label="Default" valueLabelDisplay='auto' type="range" name="weight" value={stats.weight} id="weight" min={30} max={160} />
        <br /><br />
        <Button onClick={()=>{
          if(bmi>=25){
            alert("Pandhi!!")
          }
          else if(bmi<=22){
            alert("Eat something Nub!!")
          }
        }} style={{
          fontFamily: "DM Serif Display,serif",
          fontWeight: 1000,
          fontStyle: "normal",
          height:"45px", width:"160px", fontSize:"x-large", marginBottom:"30px"}} variant="contained">BMI: {bmi}</Button>
      
      </Box>
      </div>
      

      
    </div>
  )
}

export default App
