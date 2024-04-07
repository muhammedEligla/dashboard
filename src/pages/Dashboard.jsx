import { Box, Button, Stack } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import Row1 from "./dashPages/Row1";
import Row2 from "./dashPages/Row2";
import Row3 from "./dashPages/row3";
import Header from "./Header";

const Dashboard = () => {
    return (
        <Box sx={{maxWidth:'100vw'}}>
            <Stack direction={'row'} sx={{justifyContent:"space-between" , alignItems:"center" , py:"9px"}}>
                <Header title1={'DASHBOARD'} title2={'Welcome to your dashboard'} />
                <Button variant="contained" color="primary" sx={{textTransform:"capitalize"}}>
                    <DownloadOutlined />
                    Download Reports
                </Button>
            </Stack>
            <Row1 />
            <Row2 />
            <Row3 />
        </Box>
    );
}

export default Dashboard;
