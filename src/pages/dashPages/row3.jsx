import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import PieChart from "../../pages/PieChart";
import { BarChart } from "../../pages/BarChart";
import Geography from "../../pages/Geography";

const Row3 = () => {
    const theme = useTheme()
    return (
        <Stack direction='row' sx={{mt:2  , flexWrap:'wrap' , gap:1}}>
            <Paper sx={{ flex:1, minWidth:"300px" }}>

                <Typography variant="h6" color={theme.palette.secondary.main}
                sx={{padding:"30px 30px 0"}} fontWeight="600">
                Campaign</Typography>
                <Box sx={{height:"300px"}}>
                <PieChart isDashboard={true} />

                </Box>
                <Typography variant="h6" align="center" mt='15px'>
                    $ 43,353 revemue generated
                </Typography>

                <Typography variant="body2" px={0.7} pb={3} align="center">
                    Includes extra misc expendirures and costs
                </Typography>
            </Paper>


            <Paper sx={{ flex:1 ,  minWidth:"300px"}}>
            <Typography variant="h6" color={theme.palette.secondary.main}
                sx={{padding:"30px 30px 0"}} fontWeight="600">
                Campaign</Typography>
            <Box sx={{height:"350px"}}>
                <BarChart isDashboard={true} />
            </Box>
            </Paper>


            
            <Paper sx={{ flex:1 ,  minWidth:"350px"}}>
            <Box sx={{height:"450px"}}>
                <Geography />
            </Box>
            </Paper>
        </Stack>
    );
}

export default Row3;
