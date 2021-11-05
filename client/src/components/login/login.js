import '@coreui/coreui/dist/css/coreui.min.css';
import React, {useState, useEffect, useRef} from 'react';
import Axios from 'axios';

function LoginPage() {

const isEmpty = value => value.trim() === '';

const [userlist, setUserlist] = useState([]);
const [user, setUser] = useState('null');

const userSelectedHandler = event =>{
    setUser(event.target.value);
}

useEffect(() => {
    Axios.get('http://127.0.0.1:8080/users').then((response) => {
      console.log(response.data);
      setUserlist(response.data);
    });
  }, []);

  
const loginHandler = event =>{
    event.preventDefault();
    console.log(user);
    if(user == 'null'){
        alert("Please select the user!!")
    }else{
        loginUser(user);
    }
}


const loginUser = (id) => {
    Axios.post('http://127.0.0.1:8080/emp',{
        name : "Kalpana",
        email : "abcd@gmail.com",
        role : "2"
    }).then( () => {
        alert("Sucessfull !!!");
    });
}


    return (
        <div className="col-sm-6" > 
        <div className="card">
        <div className="card-body">
            <h3>Login</h3>
            <div>Sign in to your account</div>
            <div className='div'></div>
            <select className="form-select" onChange={userSelectedHandler}>
                <option defaultValue="null" value='null'>Select User</option>
                    {userlist.map((val) => {
                        return <option value={val.emp_id} key={val.emp_id}> {val.name} </option>
                    })}
            </select>
            <div className='div'></div>
            <button className="btn btn-info" type="button" onClick={loginHandler}>Login</button>
        </div>
        </div>
        </div>
    );
}


export default LoginPage;

/* <button onClick={submitFun}> CLick</button>
{emplist.map((val) => {
    return <h2> ** {val.name} -- {val.email}</h2>
})}
*/