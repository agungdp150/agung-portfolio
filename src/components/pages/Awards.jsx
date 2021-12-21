import React from 'react'
import { Box, Typography, Link } from '@mui/material';

function Awards() {
  return (
    <Box id="awards" my={3}>      
      <Typography sx={{fontWeight: 900, mb: 1}} variant="h3"> Awards </Typography>
      <Box mt={4}>      
        <Typography sx={{fontWeight: 900, mb: 1}} variant="h5"> Hacktiv8 React and React Native Basic </Typography>        
        <Typography sx={{mb: 3}} variant="body2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia magnam nemo unde numquam ut neque. Nam ab corrupti aut consectetur! Vero non id tempora aperiam praesentium corporis dolorum rem nesciunt. </Typography>      
        <Link href="#"> View Certificate </Link>
      </Box>
      <Box mt={4}>      
        <Typography sx={{fontWeight: 900, mb: 1}} variant="h5"> Seminar Programmer Indonesia </Typography>        
        <Typography sx={{mb: 3}} variant="body2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia magnam nemo unde numquam ut neque. Nam ab corrupti aut consectetur! Vero non id tempora aperiam praesentium corporis dolorum rem nesciunt. </Typography>      
        <Link href="#"> View Certificate </Link>
      </Box>    
   </Box>
  )
}

export default Awards
