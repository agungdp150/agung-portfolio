import React from 'react'
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

function Skills() {
  return (
    <Box id="skills" my={3}>      
      <Typography sx={{fontWeight: 900, mb: 1}} variant="h3"> Skills </Typography>
      <Box>
        <List>
          <ListItem>
            <ListItemIcon><ChevronRight /></ListItemIcon>
            <ListItemText primary="React JS"/>   
          </ListItem>
          <ListItem>
            <ListItemIcon><ChevronRight /></ListItemIcon>
            <ListItemText primary="Bootsrap"/>
          </ListItem>
          <ListItem>
            <ListItemIcon><ChevronRight /></ListItemIcon>
            <ListItemText primary="React Native"/>
          </ListItem>
          <ListItem>
            <ListItemIcon><ChevronRight /></ListItemIcon>
            <ListItemText primary="Github"/>
          </ListItem>
        </List>
      </Box> 
    </Box>
  )
}

export default Skills
