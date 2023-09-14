import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Employees from './Employees'
import '../App.css';
import { FaWindowClose } from "react-icons/fa";


const Edit = () => {

    const [handlevalue, sethandlevalue] = useState("");
    const [addamount, setaddamount] = useState("");
    const [id, setId] = useState("")


    let history = useNavigate()


    var index = Employees.map(function (e) {
        return e.id
    }).indexOf(id)

    const handleSubmit = (e) => {

        e.preventDefault();
        if(handlevalue===""){
            alert("Please Enter the Name")
        
        }
        else if(addamount===""){
            alert("Please Enter the Amount")
        
        
        }
else{        

        let a = Employees[index];
        console.log(a)
        a.Name = handlevalue;
        a.Amount = parseInt(addamount)+parseInt(a.Amount);
        const storedAmount = localStorage.getItem('totalAmount');

        let  newTotal = parseInt(storedAmount) + parseInt(addamount);
 
 
         localStorage.setItem('totalAmount', parseInt(newTotal));
 

        history("/collection")
}
    }

    useEffect(() => {
        console.log(localStorage.getItem("Amount"),"sjkkjs")
        sethandlevalue(localStorage.getItem("Name"))
        setId(localStorage.getItem("Id"))
    }, [])


    return (
        <div className="Cotainer App">
        <div className="card2">
        <div style={{marginLeft:"248px",marginTop:"10px",color:"red"}}>
    <FaWindowClose onClick={()=> history("/collection")}/>

    </div>

          <div className="totalname">
            Edit
          </div>
          <div className="addamount">
    Name<br/>&nbsp;<label>
    <input type="text" className="search-text"  value={handlevalue}  onChange={((e) => sethandlevalue(e.target.value))}/>
    </label>
  </div>
  <div className="addamount">
     Amount<br/>&nbsp;<label>
     <input type="number" className="search-text"  value={addamount}  onChange={((e) => setaddamount(e.target.value))}/>
    </label></div>


                <button className='enablebutton2' onClick={(e) => handleSubmit(e)} type="button">Update</button>

                </div>


        </div>
    )
}

export default Edit
