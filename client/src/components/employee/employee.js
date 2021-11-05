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
        <div className="col-sm-6" >
        <div className="card">
        <div className="card-body">
        <div className="same-line">
            <h3>Employees</h3> <button className="btn btn-primary" type="button">Add</button>
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