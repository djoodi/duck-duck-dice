import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component='p'>Duck Duck Dice</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar