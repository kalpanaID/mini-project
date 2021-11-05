import React from 'react';
import {BrowserRouter as Router,Route,
 Redirect,Switch} from 'react-router-dom';
import App from '../App.js';
import AddEmp from './employee/addEmp.js';

function Routes(){
    return (
      <div>
           <Route path="/" component = {App}></Route>
           <Route path="/addEmployee/" component={AddEmp} />
      </div>
    )
}