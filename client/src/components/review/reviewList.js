import '@coreui/coreui/dist/css/coreui.min.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';


function Reviews () {

const [reviewlist, setReviewlist] = useState([]);

useEffect(() => {
    Axios.get('http://127.0.0.1:8080/review').then((response) => {
        console.log(response.data);
        setReviewlist(response.data);
    });
}, []);

    return (
        <div className="col-sm-6" >
        <div className="card">
        <div className="card-body">
        <div className="same-line">
            <h3>Assigned Reviews</h3>
        </div>
        <div className='div'></div>
        <div className='child'></div>
        <table className="table table-hover">
        <thead>
        <tr>
            <th scope="col">Review Id</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Year</th>
            <th scope="col">Quarter</th>
            <th scope="col">Status</th>
        </tr>
        </thead>
        <tbody>
        {reviewlist.map((val) => {
            return (
            <tr>
                <th scope="row">{val.review_id}</th>
                <td>{val.from_emp}</td>
                <td>{val.to_emp}</td>
                <td>{val.year}</td>
                <td>{val.quarter}</td>
                <td>{val.status}</td>
                <td></td>
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

export default Reviews; 