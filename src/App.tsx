import React, {useEffect, useState} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import './App.css';
import CountryDetails from './Components/CountryDetails';



function App() {
  const [data, setData] = useState(null)
  const router = createBrowserRouter([
    {path: '/' , element: <Home countries={data}/>},
    {path: '/countries/:country' , element: <CountryDetails/> },
  
  ])
  useEffect(() => {
   const fetchData = async () => {
           const response = await fetch('https://restcountries.com/v3.1/all')
           const data = await response.json()
           setData(data)
   }
   fetchData()
  },[])

  return (
    <div className="App">
     {data !== null ? <RouterProvider router={router}/> : null}
    </div>
  );
}

export default App;