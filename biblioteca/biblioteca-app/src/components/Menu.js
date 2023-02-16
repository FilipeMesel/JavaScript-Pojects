import React from 'react';
import { Container } from '@mui/system';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import EntittyList from './EntittyList';
import ClientsList from './ClientsList';
import DeviceRegister from './LocationRegister';
import LocationsList from './LocationsList';
import LocationRegister from './LocationRegister';
import { Button } from '@mui/material';
import { AutoStories, CalendarMonth, Settings, SupportAgent, TimeToLeave } from '@mui/icons-material';
import ClientsRegister from './ClientsRegister';
import EntittiyRegister from './EntittiyRegister';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Menu() {
  const theme = useTheme();
  const[visivel, setVisivel] = React.useState(1)
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function seletorComponente() {
    if(visivel === 1) {
      return(<LocationsList valor = {0}/>)
    }else if(visivel === 2) {
      return(<EntittyList />)
    }else if(visivel === 3) {
      return(<ClientsList />)
    }else if(visivel === 4) {
      return(<LocationRegister />)
    }else if(visivel === 5) {
      return(<EntittiyRegister />)
    }else if(visivel === 6) {
      return(<ClientsRegister />)
    }
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{backgroundColor:"blue"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div">
            <p>
            {/* <img src="/GRD-CMESI-TRANSPARENTE-2 (1).png" align="center" width= '50' height='50' /> */}
            <Button variant="text" onClick={()=>window.location.reload(true)}  sx={{ backgroundColor: 'blue', color: 'white' }} > MYLIBRARY MANAGER SYSTEM</Button>
                                
            </p>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
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
           <ListItem onClick={()=>setVisivel(1)} key={1} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CalendarMonth fontSize='large'/>
                </ListItemIcon>
                <ListItemText primary={"Lista de Locações"} />
              </ListItemButton>
            </ListItem>
           <ListItem onClick={()=>setVisivel(2)} key={2} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AutoStories fontSize='large'/>
                </ListItemIcon>
                <ListItemText primary={"Lista de Livros"} />
              </ListItemButton>
            </ListItem>
           <ListItem onClick={()=>setVisivel(3)} key={3} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SupportAgent fontSize='large' />
                </ListItemIcon>
                <ListItemText primary={"Lista de Clientes"} />
              </ListItemButton>
            </ListItem>
           <ListItem onClick={()=>setVisivel(4)} key={4} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Settings fontSize='large'/>
                </ListItemIcon>
                <ListItemText primary={"Cadastro de Locações"} />
              </ListItemButton>
            </ListItem>
           <ListItem onClick={()=>setVisivel(5)} key={5} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Settings fontSize='large'/>
                </ListItemIcon>
                <ListItemText primary={"Cadastro de Livros"} />
              </ListItemButton>
            </ListItem>
           <ListItem onClick={()=>setVisivel(6)} key={6} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Settings fontSize='large'/>
                </ListItemIcon>
                <ListItemText primary={"Cadastro de Clientes"} />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        
      <Container>
        <p>
          {seletorComponente()}
        </p>
      </Container>
      </Main>
    </Box>
  );
}