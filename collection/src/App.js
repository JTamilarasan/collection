import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [addAmount, setAddAmount] = useState("");
  const [subtractAmount, setSubtractAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const storedAmount = localStorage.getItem('totalAmount');
    console.log(storedAmount)
    if (storedAmount) {
      setTotalAmount(parseInt(storedAmount));
    }
  }, []);
  const handleAddition = () => {
    let newTotal;
      if(addAmount!==""){
         newTotal = parseInt(totalAmount) + parseInt(addAmount);

      }
      else{
        newTotal = parseInt(totalAmount) - (subtractAmount);
      }

      console.log(newTotal,    localStorage.setItem('totalAmount', newTotal.toString())
      )
    setTotalAmount(newTotal);
    localStorage.setItem('totalAmount', newTotal.toString());
  
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color: "white",fontSize:"42px",lineHeight:"57px", 
}}>ACC</h1>
        <b  style={{color: "white",fontSize:"30px",lineHeight:"57px"}} >Collection List</b>

        <nav>
        <ul>
            <li><a href="https://www.w3schools.com">Amount List</a></li>
            <li><a href="https://www.w3schools.com">Add Guys Amount</a></li>
        </ul>
</nav>
<div className="card">
  <div className="totalname">
    Total Amount: {totalAmount}
  </div>
  <div className="addamount">
    Add Amount:<br/>&nbsp;<label>
      <input className="search-text" type="number"
           value={addAmount}
           onChange={(e) => setAddAmount(e.target.value)}/>
    </label>
  </div>
  <div className="addamount">
    Sub Amount:<br/>&nbsp;<label>
      <input className="search-text" value={subtractAmount}  type="number"
            onChange={(e) => setSubtractAmount(e.target.value)}/>
    </label>
  </div>
  {console.log(addAmount!=="",subtractAmount!=="")}
  <button  type="button"
  className={(addAmount!=="" && subtractAmount!=="")?"disablebutton":"enablebutton"}
  disabled={addAmount!=="" && subtractAmount!==""} onClick={handleAddition}>Submit</button><br/>
<b style={{color:"red",fontSize:"10px"}}>{(addAmount!=="" && subtractAmount!=="")?"*At a time Enter only one Field Add/sub":""}</b>


    </div>

        <div className="footerValue">
            <p> Developed <br/>by</p>
            J.Tamilarasan
        </div>
      </header>
    </div>
  );
}

export default App;
