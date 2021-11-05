import '@coreui/coreui/dist/css/coreui.min.css';
import React, {useState, useEffect, useRef} from 'react';
import Axios from 'axios';

const AddEmp = () => {

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

const addEmployeeHandler = event =>{
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
    
    addEmployee(userData);
}

const addEmployee = (data) => {
    Axios.post('http://127.0.0.1:8080/emp',{
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
            <h3>Add Employee / Admin</h3>
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
            <select className="form-select" aria-label="Default select example" onChange={roleSelectedHandler}>
                <option defaultValue="null" value='0'>Select User</option>
                <option value="1">Admin</option>
                <option value="2">Employee</option>
            </select>
            </div>
            <div className="d-grid gap-2 col-12 mx-auto">
                <button className="btn btn-primary" type="button" onClick={addEmployeeHandler}>ADD</button>
            </div>
        </div>
        </div>
        </div>
    );
}

export default AddEmp; 