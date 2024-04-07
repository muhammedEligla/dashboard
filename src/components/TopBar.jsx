
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import { Box, IconButton, InputBase, Stack, alpha, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Delete } from '@mui/icons-material';
import Person from '@mui/icons-material/PersonOutlined';
import Setting from '@mui/icons-material/SettingsOutlined';
import Notifications from '@mui/icons-material/NotificationsNoneOutlined';
import LightMode from '@mui/icons-material/LightModeOutlined';
import DarkMode from '@mui/icons-material/DarkModeOutlined';



const drawerWidth = 240;


// eslint-disable-next-line react/prop-types
const TopBar = ({open , handleDrawerOpen , setMode}) => {

  const theme = useTheme().palette.mode;
    


  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
    
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  // @ts-ignore
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth ,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  

    return (
        <div>
        <AppBar position="fixed" 
        // @ts-ignore
              open={open}>
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                      marginRight: 5,
                      ...(open && { display: 'none' }),
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                 
                  <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>

                <Box flexGrow={1} />

            <Stack direction={'row'}>


          <IconButton color='inherit'
            onClick={()=>{setMode(theme === 'dark' ? 'light' : 'dark');
            localStorage.setItem('myTheme' , theme);
        }}>
            {theme === 'dark' ? <LightMode sx={{color:'gold'}} /> : <DarkMode /> }
          </IconButton>

            
            <IconButton color='inherit'>
              <Delete />
            </IconButton>


              <IconButton color='inherit'>
                <Notifications />
              </IconButton>

              <IconButton color='inherit'>
                <Setting />
              </IconButton>

              <IconButton color='inherit'>
                <Person />
              </IconButton>
                </Stack>


                </Toolbar>
              </AppBar>
        </div>
    );
}

export default TopBar;
