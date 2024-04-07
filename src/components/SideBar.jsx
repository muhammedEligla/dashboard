
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import { styled , useTheme} from '@mui/material/styles';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutline, HomeOutlined, MapOutlined , PeopleAltOutlined, PersonOutline, PieChartOutline, ReceiptOutlined, TimelineOutlined } from '@mui/icons-material';
import { Avatar, Box, Tooltip, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 9px)`,
  },
});


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

// eslint-disable-next-line react/prop-types
const SideBar = ({handleDrawerClose , open}) => {


const navgate = useNavigate();
const location = useLocation().pathname;
  
const iconsOne = [
  {text:"Dashboard" , icon:<HomeOutlined /> , path:"/"},
  {text:"Team" , icon:<PeopleAltOutlined /> , path:"/team"},
  {text:"Contacts Infromation" , icon:<ContactsOutlined /> , path:"/contacts"},
  {text:"Invoives Balavces" , icon:<ReceiptOutlined /> , path:"/invoices"},
];

const iconsTow = [
  {text:"Profile" , icon:<PersonOutline /> , path:"/form"},
  {text:"Calendar" , icon:<CalendarTodayOutlined /> , path:"/calendar"},
  {text:"FAQ Page" , icon:<HelpOutline /> , path:"faq/"},
];

const iconThree = [
  {text:"Bar Chart" , icon:<BarChartOutlined /> , path:"/bar"},
  {text:"Pie" , icon:<PieChartOutline /> , path:"/pie"},
  {text:"Line Chart" , icon:<TimelineOutlined /> , path:"/line"},
  {text:"Geography" , icon:<MapOutlined /> , path:"/geograph"},
]

    
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    // @ts-ignore
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  const theme = useTheme();

  
    return (
        <Drawer variant="permanent" 
// @ts-ignore
        open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Box sx={{mx:'auto' , my:"3px"}}>
        <Avatar alt="Remy Sharp" sx={{textAlign:"center" , mx:'auto' , border:"2px solid grey" ,
        my:"10px", width: open ? '80px' : '40px' , height: open ? '80px' : '40px'}} 
        src='./avatar.jpg' />

        <Typography sx={{fontSize: open ? '25px' : 0 , transition: ".25s"}} align='center' color="inherit">Muhammed</Typography>
        <Typography sx={{fontSize: open ? '15px' : 0 , transition: ".25s" , color: theme.palette.info.main}}  align='center' >Manager</Typography>
        </Box>
        
        <Divider />
        <List>
          {iconsOne.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
          <Tooltip title={!open && item.text} placement="left-start">
              <ListItemButton
                sx={{
                  minHeight: 40,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor: location === item.path && 'gray'
                }}
                onClick={()=> navgate(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}




        </List>
        <Divider />
        {iconsTow.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
          <Tooltip title={!open && item.text} placement="left-start">
          <ListItemButton
              sx={{
                minHeight: 40,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: location === item.path && 'gray'
              }}
              onClick={()=> navgate(item.path)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Tooltip>
          </ListItem>
        ))}

        <Divider />

        {iconThree.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
          <Tooltip title={!open && item.text } placement="left-start">
            <ListItemButton
              sx={{
                minHeight: 40,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: location === item.path && 'gray'
              }}
              onClick={()=> navgate(item.path)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </Drawer>
    );
}

export default SideBar;
