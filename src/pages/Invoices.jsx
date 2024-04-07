import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './jsonData/DataContact';

const Invoices = () => {
    return (
        <div>
        <Box sx={{ height: 600, width: '98%' , mx:"auto" }}>
        <DataGrid  checkboxSelection
        rows={rows} 
        // @ts-ignore
        columns={columns} />
      </Box>
        </div>
    );
}

export default Invoices;
