import '@coreui/coreui/dist/css/coreui.min.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { RiDeleteBin6Fill } from "react-icons/ri";


function Employees () {

    const [emplist, setEmplist] = useState([]);

    useEffect(() => {
        Axios.get('http://127.0.0.1:8080/emp').then((response) => {
          console.log(response.data);
          setEmplist(response.data);
        });
      }, []);

    return (
        <div class="col-sm-6" >
        <div class="card">
        <div class="card-body">
        <div class="same-line">
            <h3>Employees</h3> <button class="btn btn-primary" type="button">Add</button>
        </div>
        <div className='div'></div>
        <div className='child'></div>
        <table class="table table-hover">
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
            <tr>
                <th scope="row">{val.emp_id}</th>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td><RiDeleteBin6Fill/></td>
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