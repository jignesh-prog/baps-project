import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate,Outlet} from 'react-router-dom'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;




export const Dashbord = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate()
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',color:'yellow',bgcolor:'black',height:'100%' }}>
      <Typography variant="h6" sx={{ my: 2 ,color:'white'}}>
        BAPS
      </Typography>
      <Divider color='white' />
      <List>
           
          <ListItem  disablePadding>      
            <ListItemButton  sx={{ textAlign: 'center' }} onClick={() => navigate('Home')} >
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>      
            <ListItemButton  sx={{ textAlign: 'center' }} onClick={() => navigate('About')}>
              <ListItemText primary='About' />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>      
            <ListItemButton  sx={{ textAlign: 'center' }} onClick={() => navigate('Accomodation')}>
              <ListItemText primary='Accomodation' />
            </ListItemButton>
          </ListItem>
   
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{bgcolor:'black',height:'12%'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1,color:'yellow', display: { xs: 'none', sm: 'block' } }}
          >
            BAPS
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
           
              <Button sx={{ color: 'yellow' }} onClick={() => navigate('Home')}>Home</Button>
              <Button  sx={{ color: 'yellow' }} onClick={() => navigate('Accomodation')}>Accomodation</Button>
              <Button  sx={{ color: 'yellow'}} onClick={() => navigate('About')}>About</Button>
            
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
    <Outlet/>
      </Box>
    </Box>
  );
}
export default Dashbord