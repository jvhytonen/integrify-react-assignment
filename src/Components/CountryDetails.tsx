import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'


const CountryDetails = () => {
    const [data, setData] = useState(null)
    const params = useParams()
    const url = 'https://restcountries.com/v3.1/name/' + params.country
    useEffect(() => {
        const fetchData = async () => {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
                console.log(data[0].flag)
        }
        fetchData()
       },[])

    return (
        <>
      <p>Country</p>
      </>
    )
}

export default CountryDetails