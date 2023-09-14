import '../App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Home() {
  const [addAmount, setAddAmount] = useState("");
  const [subtractAmount, setSubtractAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const correctPassword = {name:"gopi"}; // Replace with your actual secret password

  

  useEffect(() => {
    const storedAmount = localStorage.getItem('totalAmount');
    console.log(storedAmount)
    if (storedAmount) {
      setTotalAmount(parseInt(storedAmount));
    }
  }, []);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    console.log(newPassword,correctPassword.name)

    setIsPasswordCorrect(newPassword === correctPassword.name);
    setPassword(newPassword);
  };
  const handleAddition = () => {
    let newTotal;
    if(password==="")
    {
      alert("Please Enter the password")


    }
    else if(isPasswordCorrect===false){
      alert("Please is incorrect")



    }
else{
      if(addAmount!==""){
         newTotal = parseInt(totalAmount) + parseInt(addAmount);

      }
      else{
        newTotal = parseInt(totalAmount) - (subtractAmount);
      }

    setTotalAmount(newTotal);
    localStorage.setItem('totalAmount', newTotal.toString());
    setAddAmount("")
    }
    
  
  };
  const handleinputchange=(e,type)=>{
    const {value}=e.target;
      let newvalue=value.replace(/[^0-9]/g,"");
       if(type==="add"){
        setAddAmount(newvalue)

      }
      else{
        setSubtractAmount("");
        setSubtractAmount("")

      }


  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color: "white",fontSize:"42px",lineHeight:"57px", 
}}>ACC</h1>
        <b  style={{color: "white",fontSize:"30px",lineHeight:"57px"}} >Collection List</b>

        <nav>
        <ul>
            <li><a href="https://www.w3schools.com">                
            <Link  to={"/amountlist"}>
<b >Amount List</b></Link></a></li>
            <li><a href="add.js"><Link  to={"/create"}><b>Add Guys Amount</b></Link></a></li>
        </ul>


</nav>

<div className="Cotainer">
<div className="card">
  <div className="totalname">
    Total Amount: {totalAmount}
  </div>
  <div className="addamount">
    Add Amount:<br/>&nbsp;<label>
      <input className="search-text" type="text"
           value={addAmount}
           onChange={(e)=>handleinputchange(e,"add")}/>
    </label>
  </div>
  <div className="addamount">
    Sub Amount:<br/>&nbsp;<label>
      <input type="text" className="search-text" value={subtractAmount}  
            onChange={(e)=>handleinputchange(e,"sub")}/>
    </label></div>
    <div className="addamount">
    Pass Word:<br/>&nbsp;<label>
      <input type="password" className="search-text" value={password}
        onChange={handlePasswordChange}
           />
    </label>

  </div>
  <button  type="button"
  className={(addAmount!=="" && subtractAmount!=="")?"disablebutton":"enablebutton"}
  disabled={addAmount!=="" && subtractAmount!=="" } onClick={handleAddition}>Submit</button><br/>
<b style={{color:"red",fontSize:"10px"}}>{(addAmount!=="" && subtractAmount!=="")?"*At a time Enter only one Field Add orsub":""}</b>


    </div>
    </div>

        <div className="footerValue">
            <p> Developed by</p><span style={{display:"inline"}}>            J.Tamilarasan
</span>
        </div>
      </header>
    </div>
  );
}

export default Home;
