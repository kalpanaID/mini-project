import '@coreui/coreui/dist/css/coreui.min.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';


function Employees () {

const [emplist, setEmplist] = useState([]);

const deleteEmployee = (data) => {
    Axios.delete('http://127.0.0.1:8080/emp/'+27,{
        emp_id : data,
    }).then( () => {
        window.location.reload();
        alert("Sucessfully deleted user !");
    }).catch((error) =>{
        console.error();
    });
}

useEffect(() => {
    Axios.get('http://127.0.0.1:8080/emp').then((response) => {
    console.log(response.data);
    setEmplist(response.data);
    });
}, []);

    return (
        <div className="col-sm-6" >
        <div className="card">
        <div className="card-body">
        <div className="same-line">
            <h3>Employees</h3>
            <Link to="/addEmployee/">
                <button className="btn btn-primary" type="button">Add</button>
            </Link>
        </div>
        <div className='div'></div>
        <div className='child'></div>
        <table className="table table-hover">
        <thead>
        <tr>
            <th scope="col">Emp Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        {emplist.map((val) => {
            return (
            <tr key={val.emp_id}>
                <th scope="row">{val.emp_id}</th>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td onClick={deleteEmployee}><RiDeleteBin6Fill/></td>
            </tr>
            );
        })}
        </tbody>
        </table>
        </div>
        </div>
        </div>
    );
}

export default Employees; 