import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/HomePage";
import ToS from "./components/tos/ToS";
import Contact from "./components/contact/contact";
import Privacy from "./components/privacy/privacy";
import Download_Worksheets from "./components/worksheets/worksheets";


import './styles/style.css';



function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
       
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/download_worksheets" component={Download_Worksheets}/>
          <Route path="/tos" component={ToS}/>
          <Route path="/privacy" component={Privacy}/>
        </Switch>
        <Contact />
      </Router>
      
      
   
    </div>
  );
}

export default App;