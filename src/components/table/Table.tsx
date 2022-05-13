import "./Table.css"
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useState, useEffect } from "react";

// THIS IS TEMPLATE DATA IF NOT CONNECTED TO A BACKEND, UNCOMMENT IF NEEDED

// const rows: GridRowsProp = [
//     { id: 1, col1: 'Hello', col2: 'World' },
//     { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
//     { id: 3, col1: 'MUI', col2: 'is Amazing' },
//     { id: 4, col1: 'MUI', col2: 'is Amazing' },
//     { id: 5, col1: 'MUI', col2: 'is Amazing' },
//     { id: 6, col1: 'MUI', col2: 'is Amazing' },
//     { id: 7, col1: 'MUI', col2: 'is Amazing' },
//     { id: 8, col1: 'MUI', col2: 'is Amazing' },
//     { id: 9, col1: 'MUI', col2: 'is Amazing' },
//     { id: 10, col1: 'MUI', col2: 'is Amazing' },
//     { id: 11, col1: 'MUI', col2: 'is Amazing' },
//     { id: 12, col1: 'MUI', col2: 'is Amazing' },
// ];

// const columns: GridColDef[] = [
//     { field: 'col1', headerName: 'Column 1', width: 150 },
//     { field: 'col2', headerName: 'Column 2', width: 150 },
// ];

export default function Table() {

// THESE FUNCTIONS FETCH DATA FROM A LOCAL DB USING A LOCAL DEV API IF NOT USSING COMMENT OUT LINES 30 - 45 and change rows={rows} in line52
       const [tableData, setTableData ] = useState([])


    useEffect(() => {
        fetch("http://localhost:4000/data")
        .then(response => response.json())
        .then(data => setTableData(data))
    },[])

    console.log(tableData)

    const columns:GridColDef[] = [
        {field: 'id', headerName:"Id"},
        {field: 'city', headerName:"City"},
        {field:'population', headerName:"Population"},
        {field:'state', headerName:"State"},
    ]
    
    return (


        <div style={{ height: "50em", width: '100%' }}>
            <DataGrid checkboxSelection sx={{backgroundColor:"#FFF"}}  rows={tableData} columns={columns} components={{ Toolbar: GridToolbar }} />
        </div>

    );
}
