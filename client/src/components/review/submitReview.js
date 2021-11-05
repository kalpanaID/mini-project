import '@coreui/coreui/dist/css/coreui.min.css';
import React, {useState, useEffect, useRef} from 'react';
import Axios from 'axios';

function SubmitReview() {

const [emplist, setEmplist] = useState([]);
const [from, setFrom] = useState('');
const [to, setTo] = useState('');
const [year, setYear] = useState('');
const [quarter, setQuarter] = useState('');

useEffect(() => {
    Axios.get('http://127.0.0.1:8080/emp').then((response) => {
    console.log(response.data);
    setEmplist(response.data);
    });
}, []);

const fromSelectedHandler = event =>{
    setFrom(event.target.value);
}
const toSelectedHandler = event =>{
    setTo(event.target.value);
}
const yearSelectedHandler = event =>{
    setYear(event.target.value);
}
const quarterSelectedHandler = event =>{
    setQuarter(event.target.value);
}

const submitReviewHandler = event =>{
    event.preventDefault();

    if(from === '' || to === '' || year === '' || quarter === ''){
        alert("Please fill all details!!")
    }
    const userData = {
        from_emp : from,
        to_emp : to,
        year : year,
        quarter : quarter
    }
    
    submitReview(userData);
}

const submitReview = (data) => {
    Axios.post('http://127.0.0.1:8080/review',{
        from_emp : data.from_emp,
        to_emp : data.to_emp,
        year : data.year,
        quarter : data.quarter
    }).then( () => {
        alert("Sucessfully added user !");
    });
}
    return (
        <div className="col-sm-6" >
        <div className="card">
        <div className="card-body">
            <h3>Submit Review Request</h3>
            <div className='div'></div>
            <div className="input-group mb-3">
                <span className="input-group-text">From  </span>
                <select className="form-select" onChange={fromSelectedHandler}>
                <option defaultValue="null" value='null'>Select User</option>
                    {emplist.map((val) => {
                        return <option value={val.emp_id} key={val.emp_id}> {val.name} </option>
                    })}
                </select>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" > To    </span>
                <select className="form-select" onChange={toSelectedHandler}>
                <option defaultValue="null" value='null'>Select User</option>
                    {emplist.map((val) => {
                        return <option value={val.emp_id} key={val.emp_id}> {val.name} </option>
                    })}
                </select>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Year  </span>
                <input className="form-control" onChange={yearSelectedHandler} type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" >Quater</span>
                <input className="form-control" onChange={quarterSelectedHandler} type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div className="d-grid gap-2 col-12 mx-auto">
                <button className="btn btn-primary" type="button" onClick={submitReviewHandler}>ADD</button>
            </div>
        </div>
        </div>
        </div>
    );
}

export default SubmitReview;