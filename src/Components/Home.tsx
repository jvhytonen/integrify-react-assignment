import React from 'react'
import TableComponent, { DataType } from './TableComponent'
import TopBar from './AppBar'

const Home = (props:DataType) => {
    return (
        <>
            {props.countries !== null ? <TopBar countries={props.countries} /> : null}
            {props.countries !== null ? <TableComponent countries={props.countries} /> : null}
        </>
    )
}

export default Home