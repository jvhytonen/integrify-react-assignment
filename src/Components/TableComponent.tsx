import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const TableComponent = (props: any) => {
    
    return (
        <>
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Flag</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Region</TableCell>
                        <TableCell align="center">Population</TableCell>
                        <TableCell align="center">Languages</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableRow>
                <TableCell align="center">Flag here</TableCell>
                            <TableCell align="center">Argentina</TableCell>
                            <TableCell align="center">South America</TableCell>
                            <TableCell align="center">5</TableCell>
                            <TableCell align="center">Spanish</TableCell>
                            <TableCell align="center"><KeyboardArrowRightIcon/></TableCell>
                </TableRow>
            </Table>
        </TableContainer> 
        </>
    )
}

export default TableComponent