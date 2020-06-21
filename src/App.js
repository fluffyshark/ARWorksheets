import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/HomePage";
import ToS from "./components/tos/ToS";

import './styles/style.css';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/tos" component={ToS} />
        </Switch>
      </Router>
      
      
   
    </div>
  );
}

export default App;
