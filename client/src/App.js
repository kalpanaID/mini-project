import './App.css';
import React, {useState, useEffect} from 'react';
import UpdateEmp from './components/employee/updateEmp';
import SubmitFeedback from './components/review/submitFeedback';
import SubmitReview from './components/review/submitReview';
import Employees from './components/employee/employee';
import hostUrl from './components/host';
import Login  from './components/login/login';
import Axios from 'axios';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Login></Login>
      </header>
    </div>
  );
}

export default App;
