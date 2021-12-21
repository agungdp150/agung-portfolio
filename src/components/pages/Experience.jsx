import React from 'react'
import { Box, Typography } from '@mui/material';

function Experience() {
  return (
  <Box id="experience" my={3}>      
    <Typography sx={{fontWeight: 900, mb: 1}} variant="h3"> Experience </Typography>
    <Box mt={4}>      
      <Typography sx={{fontWeight: 900, mb: 1}} variant="h5"> Github </Typography>
      <Typography sx={{color: 'gray', mb: 1.5}} variant="subtitle1"> Tools Work Collaboration  </Typography>
      <Typography variant="body2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia magnam nemo unde numquam ut neque. Nam ab corrupti aut consectetur! Vero non id tempora aperiam praesentium corporis dolorum rem nesciunt. </Typography>      
    </Box>  
    <Box mt={4}>      
      <Typography sx={{fontWeight: 900, mb: 1}} variant="h5"> React JS </Typography>
      <Typography sx={{color: 'gray', mb: 1.5}} variant="subtitle1"> Web Development Framework </Typography>
      <Typography variant="body2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia magnam nemo unde numquam ut neque. Nam ab corrupti aut consectetur! Vero non id tempora aperiam praesentium corporis dolorum rem nesciunt. </Typography>      
    </Box> 
    <Box mt={4}>      
      <Typography sx={{fontWeight: 900, mb: 1}} variant="h5"> React Native </Typography>
      <Typography sx={{color: 'gray', mb: 1.5}} variant="subtitle1"> Mobile Development Framework </Typography>
      <Typography variant="body2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia magnam nemo unde numquam ut neque. Nam ab corrupti aut consectetur! Vero non id tempora aperiam praesentium corporis dolorum rem nesciunt. </Typography>      
    </Box>  
    <Box mt={4}>      
      <Typography sx={{fontWeight: 900, mb: 1}} variant="h5"> Bootsrap </Typography>
      <Typography sx={{color: 'gray', mb: 1.5}} variant="subtitle1"> CSS Development Framework </Typography>
      <Typography variant="body2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia magnam nemo unde numquam ut neque. Nam ab corrupti aut consectetur! Vero non id tempora aperiam praesentium corporis dolorum rem nesciunt. </Typography>      
    </Box>  
  </Box>
  )
}

export default Experience
