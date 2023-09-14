import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Employees from './Employees'
import '../App.css';
import { FaWindowClose } from "react-icons/fa";


const Edit = () => {

    const [handlevalue, sethandlevalue] = useState("");
    const [addamount, setaddamount] = useState("");
    const [id, setId] = useState("")
    const [password, setPassword] = useState('');
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const correctPassword = {name:"gopi"}; // Replace with your actual secret password


    let history = useNavigate()
    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        console.log(newPassword,correctPassword.name)
    
        setIsPasswordCorrect(newPassword === correctPassword.name);
        setPassword(newPassword);
      };


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
        else if(password==="")
        {
          alert("Please Enter the password")
    
    
        }
        else if(isPasswordCorrect===false){
          alert("Please is incorrect")
    
    
    
        }

else{        

        let a = Employees[index];
        console.log(a)
        a.Name = handlevalue;
        a.Amount = parseInt(addamount)+parseInt(a.Amount);

        history("/collection")
}
    }

    useEffect(() => {
        console.log(localStorage.getItem("Amount"),"sjkkjs")
        sethandlevalue(localStorage.getItem("Name"))
        setaddamount(localStorage.getItem("Amount"))
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

    <div className="addamount">
    Pass Word:<br/>&nbsp;<label>
      <input type="password" className="search-text" value={password}
        onChange={handlePasswordChange}
           />
    </label>

  </div>

                <button className='enablebutton2' onClick={(e) => handleSubmit(e)} type="button">Update</button>

                </div>


        </div>
    )
}

export default Edit
