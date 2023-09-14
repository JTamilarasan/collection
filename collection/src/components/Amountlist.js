import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Employees from './Employees'
import './Amountcs.css';
import { FaWindowClose } from "react-icons/fa";

const Amountlist = () => {
    const [searchValue, setSearchValue] = useState("")
    const [pacientes, setpacientes] = useState(Employees)


    useEffect(() => {
        const newPacientes = pacientes.filter(value => value.Name.toLowerCase().includes(searchValue.toLowerCase()))
        if(searchValue!==""){
            setpacientes(newPacientes)

        }
        else{
            setpacientes(Employees)
        }
      }, [searchValue,pacientes])
    let history = useNavigate();

    const handleEdit = (id, name, age) => {
        localStorage.setItem("Name", name)
        localStorage.setItem("Amount", age)
        localStorage.setItem("Id", id)
    }
    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
      };
      const linkStyle = {
        display: 'inline-block',
        textDecoration: 'none',
      };


    return (
        <>

                <div style={{marginLeft:"340px",marginTop:"10px",color:"red",fontSize:"25px"}}>
    <FaWindowClose onClick={()=> history("/collection")}/>
</div>
            <h1>Amount Received</h1><br/>
            <div className="search-bar">
        <input type="text" class="search-text" placeholder="Search" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
        <button className="btn-search">
            <i className="fa fa-search"></i>
        </button>
    </div>


    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
        {
                            pacientes && pacientes.length > 0
                                ?
                                pacientes.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Amount}
                                            </td>
                                            <td>
                                                <Link to={"/edit"} style={linkStyle} >
                                                    <button style={buttonStyle} onClick={() => handleEdit(item.id, item.Name, item.Amount)}> EDIT </button>
                                                </Link>
                                                &nbsp;
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No Data Available"
                        }

        </tbody>
    </table>
    
        </>
    )
}

export default Amountlist