import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns , rows} from "./jsonData/DataContact";


const Contacts = () => {
    return (
        <Box sx={{ height: 600, width: '98%' , mx:"auto" }}>
        <DataGrid  slots={{
            toolbar: GridToolbar,
          }}
        rows={rows} 
// @ts-ignore
        columns={columns} />
      </Box>
    );
}

export default Contacts;
