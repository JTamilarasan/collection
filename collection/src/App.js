import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [addAmount, setAddAmount] = useState();
  const [subtractAmount, setSubtractAmount] = useState();
  const [totalAmount, setTotalAmount] = useState(0);
  const [disable, setdisable] = useState(true);

  useEffect(() => {
    const storedAmount = localStorage.getItem('totalAmount');
    if (storedAmount) {
      setTotalAmount(parseInt(storedAmount));
    }
  }, []);
  const handleAddition = () => {
    let newTotal;
    if(addAmount!=="" && subtractAmount!==""){
      setdisable(true)

    }
    else{
      setdisable(false);
      if(addAmount!==""){
         newTotal = totalAmount + addAmount;

      }
      else{
        newTotal = totalAmount - subtractAmount;
      }

    setTotalAmount(newTotal);
    localStorage.setItem('totalAmount', newTotal.toString());
    }
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
      <input class="search-text" type="number"
           value={addAmount}
           onChange={(e) => setAddAmount(parseInt(e.target.value))}/>
    </label>
  </div>
  <div className="addamount">
    Sub Amount:<br/>&nbsp;<label>
      <input class="search-text" value={subtractAmount}
            onChange={(e) => setSubtractAmount(parseInt(e.target.value))}/>
    </label>
  </div>
  <button  type="button" disabled={disable} onClick={handleAddition}>Submit</button>



    </div>

        <div className="footer">
            <p> Developed <br/>by</p>
            J.Tamilarasan
        </div>
      </header>
    </div>
  );
}

export default App;
