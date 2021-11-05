import '@coreui/coreui/dist/css/coreui.min.css';
import React, {useState, useEffect, useRef} from 'react';
import Axios from 'axios';


function UpdateEmp() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [role, setRole] = useState('');

const nameSelectedHandler = event =>{
    setName(event.target.value);
}
const emailSelectedHandler = event =>{
    setEmail(event.target.value);
}
const roleSelectedHandler = event =>{
    setRole(event.target.value);
}

const updateEmployeeHandler = event =>{
    event.preventDefault();
    console.log(name , email, role);

    if(name === '' || role === '' || email === ''){
        alert("Please fill all details!!")
    }
    const userData = {
        name : name,
        email : email,
        role : role
    }
    
    updateEmployee(userData);
}

const updateEmployee = (data) => {
    Axios.put('http://127.0.0.1:8080/emp',{
        emp_id : 25,
        name : data.name,
        email : data.email,
        role : data.role
    }).then( () => {
        alert("Sucessfully added user !");
    });
}

    return (
        <div className="col-sm-6" >
        <div className="card">
        <div className="card-body">
            <h3>Update Employee Info</h3>
            <div className='div'></div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">*</span>
                <input className="form-control" type="text" onChange={nameSelectedHandler} placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"></input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input className="form-control" type="text" onChange={emailSelectedHandler} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"></input>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">#</span>
            <select className="form-select" onChange={roleSelectedHandler} aria-label="Default select example" >
                <option defaultValue="null" value='0'>Select User</option>
                <option value="1">Admin</option>
                <option value="2">Employee</option>
            </select>
            </div>
            <div className="d-grid gap-2 col-12 mx-auto">
                <button className="btn btn-primary" onClick={updateEmployeeHandler} type="button">Update</button>
            </div>
        </div>
        </div>
        </div>
    );
}

export default UpdateEmp; 