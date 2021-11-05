import '@coreui/coreui/dist/css/coreui.min.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';


function EmployeeInfo (empId) {

const [empInfo, setEmpInfo] = useState([]);

useEffect(() => {
    Axios.get('http://127.0.0.1:8080/emp/'+23).then((response) => {
    console.log(response.data);
    setEmpInfo(response.data);
    });
}, []);

    return (
        <div className="col-sm-6" >
        <div className="card">
        <div className="card-body">
        <div className="same-line">
            <p> <b>Employee id : empId </b></p>
        </div>
        <table className="table table-hover">
        {empInfo.map((val) => {
            return (
            <tbody>
            <tr>
                <th scope="row"></th>
                <td></td>
            </tr>
            <tr>
                <th scope="row">Name : </th>
                <td>{val.name}</td>
            </tr>
            <tr>
                <th scope="row">Email : </th>
                <td>{val.email}</td>
            </tr>
            <tr>
                <th scope="row">Role : </th>
                <td>{val.role}</td>
            </tr>
        </tbody>
            );
        })}
        </table>
        </div>
        </div>
        </div>
    );
}

export default EmployeeInfo; 