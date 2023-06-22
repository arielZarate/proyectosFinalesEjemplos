import  React,{useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import{ Drawer} from '@mui/material';
 import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import {GroupAdd,Lock,Favorite,Home,Pets,Diversity1} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import {ListItemButton,ListItemIcon,ListItemText,Divider,IconButton,Button, Container} from '@mui/material';
import LoginButton from '../Account/LoginButton';
//=======================
import SearchBar from '../SearchBar/SearchBar';
import Login from '../Account/Login';
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import './NavBar.css'
import Stack from '@mui/material/Stack';
import patita from '../../Images/patita.png'

const drawerWidth = 200;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function NavBar() {
  const theme = useTheme(); 
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false)
    }, 4000);
   
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


const arrayNav=[
{
  name:  'Adopcion',
   path: '/Home',
   icon: <Diversity1/>
}
  ,
{
  name:  'Doná',
   path: '/Dona',
   icon: <Favorite/>
}
  ,
{
  name:  'Registra Mascota',
   path: '/CreatePet',
   icon: <Pets/>
}
  ,
{
  name:  'Sobre Nosotros',
   path: '/About', 
   icon: <Home/>
}

]

const arrayNav2=[

{ name:'Registro',
  path:'/createUsuario',
  icon:  <GroupAdd/>
}
/* ,
{ name:'Iniciar sesion',
  path: '/login',  
  icon:  <Lock/>
} */
]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    <AppBar position="fixed" sx={{backgroundColor:'#fafafa' ,color:"Black" }} open={open} >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              sx={{ mr: 1, ...(open && { display: 'none' }) }}
            >
               <MenuIcon sx={{ color: '#01579b' }} /> 
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              sx={{ display: { xs: 'none', sm: 'block', textDecoration: "none", color: "black" } }}
              className={theme.typography}
              component={Link}
              to="/"
            >Adoptame
            <img src={patita} width="30px" height="30px" className='margenIzquierdo' />

            </Typography>

            <Box sx={{ flexGrow: 1 }}>
             <SearchBar />  
            </Box>
            <Stack spacing={2} direction="row">
              <Link to={'/dashboard'}>
            <Button className='btn' variant="contained">Admin</Button>
              </Link>
              <Login/>
            </Stack>
         </Toolbar>

      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:"#fafafa",
            color:"#01579b"
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
       <List> 
        {arrayNav.map((item) => (
            <ListItem key={item.name}   >
              <ListItemButton  component={Link} to={item.path}>  
                 <ListItemIcon  >
                
                   {item.icon}
                </ListItemIcon> 
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
         <Divider/>
          {arrayNav2.map((item2) => (
            <ListItem key={item2.name} disablePadding>
              <ListItemButton component={Link} to={item2.path}>
                <ListItemIcon>
               {item2.icon}
                </ListItemIcon>
                <ListItemText primary={item2.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer> 
    </Box>
  );
}
