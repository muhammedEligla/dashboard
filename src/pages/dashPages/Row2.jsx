import { Box, Button, Paper, Stack, Typography, useTheme } from "@mui/material";
import LineChart from "../../pages/LineChart";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "../../pages/jsonData/DataTransactions";

const Row2 = () => {
    const theme = useTheme();
    return (
        <Stack sx={{mt:2 , flexGrow:1}} direction={'row'}  flexWrap={'wrap'}   gap={1}>
            <Paper sx={{flexGrow:1, width:'500px' ,minWidth:'450px'}}>

                <Stack  direction={'row'}  flexWrap={'wrap'} sx={{alignItems:"center" , justifyContent:"space-between"}} >
                    <Box>
                        <Typography variant="h6" sx={{margin:'20px 0 10px 30px'}} color={theme.palette.secondary.main}>
                            Revenue Generated
                        </Typography>
                        <Typography variant="body2" ml={4} >$65,45.56</Typography>
                    </Box>


                    <Box>
                        <Button>
                            <DownloadOutlined />
                        </Button>
                    </Box>
                </Stack>
                <Box sx={{height:"330px" }}>
                <LineChart />
                </Box>
            </Paper>

            <Box  sx={{flexGrow:1, maxWidth:700 , maxHeight:'412.2px', overflow:'auto'}}>
                <Paper>
                <Typography
                textAlign={'center'}
                color={theme.palette.secondary.main}
                fontWeight={'bold'}
                p={1.4} variant="h6">
                    Recent Transactions
                </Typography>

                </Paper>
                {Transactions.map( item =>{
                    return(
                         <Paper key={item.textId} sx={{mt:1 , display:'flex' , justifyContent:"space-between" , alignItems:"center"}}>
                    <Box p={1.2} >
                        <Typography variant="body1" fontWeight={'600'}>{item.user}</Typography>
                        <Typography variant="body2" >{item.date}</Typography>
                    </Box>
                    <Typography variant="body1" >gg</Typography>
                    <Typography variant="body2"
                    p={1} mr={1} borderRadius={1.5} bgcolor={theme.palette.error.main}  
                    color={theme.palette.getContrastText(theme.palette.error.main)}>
                    {item.cost}$</Typography>
                </Paper>
                    )
                })}
               
            </Box>


        </Stack>
    );
}

export default Row2;
