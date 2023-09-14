import React, { useState } from 'react';
import '../App.css';


import { useNavigate } from 'react-router-dom'
import Employees from './Employees'
import { v4 as uuid } from "uuid"
import { FaWindowClose } from "react-icons/fa";

const Add = () => {
    const [handlevalue, sethandlevalue] = useState("");
    const [addamount, setaddamount] = useState("");
  
  


    let history = useNavigate()
    
    const handleAddition = (e) => {
        e.preventDefault();
if(handlevalue===""){
    alert("Please Enter the Name")

}
else if(addamount===""){
    alert("Please Enter the Amount")


}
else{    

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = handlevalue;
        let b = addamount;
        const storedAmount = localStorage.getItem('totalAmount');

       let  newTotal = parseInt(storedAmount) + parseInt(b);


        localStorage.setItem('totalAmount', parseInt(newTotal));


         Employees.push({ id: uniqueId, Name: a, Amount: b });

        history("/collection")
}
    }
    const handleaddamount=(e)=>{
        const {value}=e.target;
        let newvalue=value.replace(/[^0-9]/g,"");
        setaddamount(newvalue)
  

    }

    return (
        <>

        <div className="Cotainer App">
<div className="card2">
    <div style={{marginLeft:"248px",marginTop:"10px",color:"red"}}>
    <FaWindowClose onClick={()=> history("/collection")}/>

    </div>
  <div className="totalname">
    Add Name and Amount
  </div>
  <div className="addamount">
    Name<br/>&nbsp;<label>
      <input className="search-text" type="text"
           value={handlevalue}
           onChange={(e)=>sethandlevalue(e.target.value)}/>
    </label>
  </div>
  <div className="addamount">
     Amount<br/>&nbsp;<label>
      <input type="text" className="search-text" value={addamount}  
            onChange={(e)=>handleaddamount(e)}/>
    </label></div>

  <button  type="button" className='enablebutton2'
  
  onClick={handleAddition}>Submit</button><br/>


    </div>
    </div>


        </>
    )
}

export default Add
