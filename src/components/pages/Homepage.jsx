import React from 'react'
import { Box, Divider } from '@mui/material';
import {About, Awards, Experience, Interests, Skills} from './index'

function Homepage() {
  return (
    <Box id="home">      
      <About/>
      <Divider/>
      <Experience/>
      <Divider/>
      <Skills/>
      <Divider/>
      <Interests/>      
      <Divider/>
      <Awards/>
    </Box>
  )
}

export default Homepage
