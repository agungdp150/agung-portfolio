import { Homepage } from './components/pages'
import Sidenav from './components/ui-components/Sidenav'
import { createStyles, makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const useStyles = makeStyles((theme) =>
  createStyles({
    container: {     
      display: 'flex'
    },
    content: {
      padding: 24,
      maxWidth: '1248px',
      margin: '16px 0px 0px 40px'
    }
  }),
);

function App() {
  const classes = useStyles()
  return (
    <BrowserRouter>          
      <Box className={classes.container}>
        <Sidenav/>
        <Box className={classes.content}>
          <Routes>                                
            <Route path="/" element={<Homepage/>} />            
          </Routes>      
        </Box>
      </Box>            
    </BrowserRouter>    
  );
}

export default App;
