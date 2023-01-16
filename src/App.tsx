import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState(null)
  useEffect(() => {
   const fetchData = async () => {
           const response = await fetch('https://restcountries.com/v3.1/all')
           const data = await response.json()
           console.log(data)
   }
   fetchData()
  })

  return (
    <div className="App">
      <header className="App-header">
      <p>The app</p>
      </header>
    </div>
  );
}

export default App;
