import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Languages, { LanguagesType } from './Languages'
import TablePagination from '@mui/material/TablePagination';
import { Link } from 'react-router-dom'

export interface DataType {
    countries: TableDataType[] | null
}

interface TableDataType {
    flag: string
    name: CountryNamesType
    region: string
    population: number
    languages: LanguagesType
}

interface CountryNamesType {
    name: string
    common: string
}

const TableComponent = (props: DataType) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage:number) => {
        setPage(newPage)
    }
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }
    return (
          <>
          <TableContainer sx={{height: '90%'}}>
                <Table sx={{ width: '100%' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Flag</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Region</TableCell>
                            <TableCell align="left">Population</TableCell>
                            <TableCell align="left">Languages</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    {props.countries !== null ? 
                    <TableBody>
                        {props.countries
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((item: TableDataType, index: number,) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell sx={{ fontSize: '600%', padding: 1, lineHeight: 0 }} align="left">{item.flag}</TableCell>
                                    <TableCell align="left">{item.name.common}</TableCell>
                                    <TableCell align="left">{item.region}</TableCell>
                                    <TableCell align="left">{item.population}</TableCell>
                                    <TableCell align="left"><Languages {...item.languages} /></TableCell>
                                    <TableCell sx={{cursor: 'pointer'}} align="center"><Link to={`/countries/${item.name.common}`}><KeyboardArrowRightIcon /></Link></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    : null }
                </Table>
            </TableContainer>
            {props.countries !== null ?
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={props.countries.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            /> : null }
        </>
    )
}

export default TableComponent
