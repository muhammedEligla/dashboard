import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import { ThemeProvider } from '@emotion/react';
import { getDesignTokens } from './Theme';
import { Outlet } from 'react-router-dom';




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
   
  const handleDrawerClose = () => {
    setOpen(false);
  }; 
  
  const myThemem = localStorage.myTheme === 'light' ? 'dark' : 'light'
  const [mode, setMode] = React.useState(myThemem);

  
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />
      <SideBar handleDrawerClose={handleDrawerClose} open={open} />


      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
    </ThemeProvider>
  );
}
