import "./blank.css"
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';

const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 4, col1: 'MUI', col2: 'is Amazing' },
    { id: 5, col1: 'MUI', col2: 'is Amazing' },
    { id: 6, col1: 'MUI', col2: 'is Amazing' },
    { id: 7, col1: 'MUI', col2: 'is Amazing' },
    { id: 8, col1: 'MUI', col2: 'is Amazing' },
    { id: 9, col1: 'MUI', col2: 'is Amazing' },
    { id: 10, col1: 'MUI', col2: 'is Amazing' },
    { id: 11, col1: 'MUI', col2: 'is Amazing' },
    { id: 12, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
];

function Blank() {
    return (


        <div style={{ height: "50em", width: '100%' }}>
            <DataGrid checkboxSelection sx={{backgroundColor:"#FFF"}}  rows={rows} columns={columns} components={{ Toolbar: GridToolbar }} />
        </div>

    );
}

export default Blank;