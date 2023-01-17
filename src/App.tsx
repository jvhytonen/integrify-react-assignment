import React, {useEffect, useState} from 'react';
import TableComponent from './Components/TableComponent'
import TopBar from './Components/AppBar'
import './App.css';


function App() {

  const [data, setData] = useState(null)
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
      {data !== null ? <TopBar countries={data}/> : null}
      {data !== null ? <TableComponent countries={data}/> : null}
    </div>
  );
}

export default App;
