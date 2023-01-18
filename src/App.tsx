import React, { useEffect, useState, createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import './App.css';
import CountryDetails from './Components/SingleCountry/CountryDetails';
import { sortList, DataType } from './utils/helpers';


export const CountryContext = createContext<DataType | null>(null)

function App() {
  const [data, setData] = useState<DataType | null>(null)
  const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '/countries/:country', element: <CountryDetails /> },

  ])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all')
      const data = await response.json()
      const countries = sortList(data)
      setData(countries)
    }
    fetchData()
  }, [])

  return (
    <CountryContext.Provider
      value={{
        data: data
      }}
    >
      <div className="App">
        {data !== null ? <RouterProvider router={router} /> : null}
      </div>
    </CountryContext.Provider>
  );
}

export default App;