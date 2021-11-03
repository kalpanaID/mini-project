import './App.css';
import React, {useState, useEffect} from 'react';
import UpdateEmp from './components/employee/updateEmp';
import SubmitFeedback from './components/review/submitFeedback';
import SubmitReview from './components/review/submitReview';
import Employees from './components/employee/employee';
import Reviews from './components/review/reviewList'
import hostUrl from './components/host';
import LoginPage  from './components/login/login';
import Header1 from './components/header/header1';
import Header2 from './components/header/header2';
import Axios from 'axios';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header1></Header1>
        <div className='div'> </div>
        <div className='div'> </div>
        <div className='div'> </div>
        <LoginPage></LoginPage>
        <Employees></Employees>
        <Reviews></Reviews>
        <UpdateEmp></UpdateEmp>
        <SubmitFeedback></SubmitFeedback>
        <SubmitReview></SubmitReview>
      </header>
    </div>
  );
}

export default App;
