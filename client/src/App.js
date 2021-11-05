import './App.css';
import React, {useState, useEffect} from 'react';
import UpdateEmp from './components/employee/updateEmp';
import SubmitFeedback from './components/review/submitFeedback';
import SubmitReview from './components/review/submitReview';
import EmployeeInfo from './components/employee/empInfo';
import Employees from './components/employee/employee';
import Reviews from './components/review/reviewList'
import hostUrl from './components/host';
import LoginPage  from './components/login/login';
import Header1 from './components/header/header1';
import Header2 from './components/header/header2';
import AddEmp from './components/employee/addEmp';
import Axios from 'axios';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <SubmitReview></SubmitReview>
      </header>
    </div>
  );
}

export default App;
