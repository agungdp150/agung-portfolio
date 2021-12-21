import React from 'react'
import { createStyles, makeStyles } from '@mui/styles';
import { Box, Drawer, Divider, List, ListItem, ListItemText, Avatar, Typography, Link, ListItemIcon } from '@mui/material';
import { Phone, Mail, Place } from '@mui/icons-material';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: 300,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 300,
        boxSizing: 'border-box',
      },
    },
    avatar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }
  }),
);

function Sidenav() {
  const classes = useStyles()

  const MenuListItems = [
    {label: 'Home', value: 'home'}, 
    {label: 'About', value: 'about'}, 
    {label: 'Experience', value: 'experience'}, 
    {label: 'Skills', value: 'skills'}, 
    {label: 'Interest', value: 'interest'}, 
    {label: 'Awards', value: 'awards'}
  ]

  return (
    <Box>
      <Drawer 
       variant="persistent" 
       anchor="left" 
       open
       className={classes.container}        
      >
        <Box my={3} className={classes.avatar}>
          <Avatar
            alt="Remy Sharp"
            src="https://tinyurl.com/4b8fzvwx"
            sx={{ width: 132, height: 132 }}
          />
          <Typography sx={{mt: 2, fontWeight: 900}} variant="h5">Jhon Doe</Typography>
        </Box>
        <Divider/>
        <Box>
          <List>
            {MenuListItems.map((menu) => (
              <>
              <Link href={`/#${menu.value}`} >
                <ListItem button key={menu.value}>                
                  <ListItemText primary={menu.label} />
                </ListItem>
              </Link>
                <Divider/>
              </>
            ))}
          </List>          
          <List>                                    
            <ListItem>
              <ListItemIcon><Phone/></ListItemIcon>                
              <ListItemText primary="+62 4358 1681 50" />
            </ListItem>
            <ListItem >
              <ListItemIcon><Mail/></ListItemIcon>                
              <ListItemText primary="jhon@mail.com" />
            </ListItem>
            <ListItem >
              <ListItemIcon><Place/></ListItemIcon>                
              <ListItemText primary="Douglasside Ortiz Mews 449992" />
            </ListItem>                                  
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}

export default Sidenav
