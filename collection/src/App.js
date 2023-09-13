import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState('')


  useEffect(() => {
localStorage.setItem('MYITEM',"TAMILA")


}, []);
  useEffect(() => {
    const sggs=localStorage.getItem('MYITEM',"TAMILA")
    if(sggs){
      setData(sggs)
    }


}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
