
import { DataGrid,} from '@mui/x-data-grid';
import { rows } from './jsonData/DataTeam';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';


const Team = () => {

  // @ts-ignore
  const bgManager = useTheme().palette.secondary.dark;
  // @ts-ignore
  const bgAdmin = useTheme().palette.primary.dark;
  const bgUser = "#3da58a";
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 25 },
    { field: 'name', headerName: 'Name', flex:1 , align:"center" , headerAlign:'center'},
    { field: 'email', headerName: 'Email', flex:1 , align:"center" , headerAlign:'center' },
    { field: 'age', headerName: 'Age', width: 25 , align:"center" , headerAlign:'center' },
    { field: 'phone', headerName: 'Phone', flex:1 , align:"center" , headerAlign:'center' },
    { field: 'access', headerName: 'Access', flex:1 , align:"center" , headerAlign:'center' , 
    renderCell: ({row: {access}})=>{
      return(
        <Box sx={{bgcolor:access === 'Manager' ? bgManager : access === 'Admin' ? bgAdmin : bgUser
          ,p:1 , width:"98px" , textAlign:"center" , color:"white",
          borderRadius:"3px" , display:'flex' , justifyContent: "space-evenly"}}>

          {access === 'Admin' ? <AdminPanelSettingsOutlined fontSize='small' />:
          access === 'Manager' ? <SecurityOutlined fontSize='small' />:
          <LockOpenOutlined fontSize='small' /> }
          
          <Typography sx={{fontSize:"13px"}} >{access}</Typography>
        </Box>
      )
    } },
  ];
    return (
        <Box sx={{ height: 600, width: '98%' , mx:"auto" }}>
        <DataGrid rows={rows} 
// @ts-ignore
        columns={columns} />
      </Box>
    );
}

export default Team;
