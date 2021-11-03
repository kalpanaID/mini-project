import '@coreui/coreui/dist/css/coreui.min.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function Login() {

const [emplist, setEmplist] = useState([]);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [role, setRole] = useState("");

useEffect(() => {
  Axios.get('http://127.0.0.1:8080/users').then((response) => {
    console.log(response.data);
    setEmplist(response.data);
  });
}, []);

const submitFun = () => {
    Axios.post('http://127.0.0.1:8080/emp',{
        name : "Kalpana",
        email : "abcd@gmail.com",
        role : "2"
    }).then( () => {
        alert("Sucessfull !!!");
    });
}

    return (
        <div class="col-sm-6" > 
        <div class="card">
        <div class="card-body">
            <h3>Login</h3>
            <div>Sign in to your account</div>
            <div className='div'></div>
            <select class="form-select" aria-label="Default select example" >
                <option selected>Select User</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <div className='div'></div>
            <button class="btn btn-info" type="button">Login</button>
        </div>
        </div>
        </div>
    );
}


export default Login;

/* <button onClick={submitFun}> CLick</button>
{emplist.map((val) => {
    return <h2> ** {val.name} -- {val.email}</h2>
})}
*/