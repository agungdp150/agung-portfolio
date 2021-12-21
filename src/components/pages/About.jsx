import React from 'react'
import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box id="about" my={3}>      
      <Box my={3}>
        <Typography sx={{fontWeight: 900, mb: 1}} variant="h3"> Hi, I'm Jhon Doe </Typography>
        <Typography sx={{mb: 2}} variant="h5"> Frontent Web Developer </Typography>
        <Typography sx={{width: 900}} variant="body1"> 
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit rem eaque maxime, officiis voluptatem perspiciatis aspernatur, vel optio atque esse libero ab minima ex sequi harum reprehenderit hic fugiat omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi natus nihil quia cum hic sapiente? Nulla assumenda sit ducimus animi, amet corrupti illum, nihil rem aut soluta velit reprehenderit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo mollitia quibusdam doloribus commodi fugit sequi aliquid iste corporis odio dolor in perferendis natus, culpa minus iure facere, recusandae temporibus eligendi.
        </Typography>
      </Box> 
    </Box>
  )
}

export default About
