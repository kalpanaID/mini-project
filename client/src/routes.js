import React from 'react';
import {BrowserRouter as Router,Route,
 Redirect,Switch} from 'react-router-dom';
import Home from './App.js';
import Tutorials from './tutorials.js';

function Routes(){
    return (
    <Router>
      <div>
        <Switch>
           <Route path="/" component = {App}></Route>
           <Redriect from='/blog/' to="/tutorials/" />
           <Route path="/tutorials/" component={About} />
        </Switch>
      </div>
    </Router>
    )
}