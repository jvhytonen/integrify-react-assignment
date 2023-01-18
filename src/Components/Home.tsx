import React, {useContext} from 'react'
import TableComponent from './Table/TableComponent'
import TopBar from './Topbar/TopBar'
import {CountryContext} from '../App'

const Home = () => {
    const ctx = useContext(CountryContext)
    return (
        <>
            {ctx !== null ? <TopBar /> : null}
            {ctx !== null ? <TableComponent /> : null}
        </>
    )
}

export default Home