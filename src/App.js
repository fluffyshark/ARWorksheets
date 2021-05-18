import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/HomePage";
import ToS from "./components/tos/ToS";
import Contact from "./components/contact/contact";
import Privacy from "./components/privacy/privacy";
import Download_Worksheets from "./components/worksheets/worksheets";
import Email_section from "./components/email_section/Email_section";

// MATH GENIUS
import MGXHome from "./components/MathGenius/MGXHome";
// BLOG
import BlogHome from "./components/Blog/BlogHome";
import AlmostDone from "./components/Blog/Articles/AlmostDone/AlmostDone";
import ThinkTheyFinished from "./components/Blog/Articles/ThinkTheyFinished/ThinkTheyFinished";
import FantasyWorld from "./components/Blog/Articles/FantasyWorld/FantasyWorld";
import MathLeveling from "./components/Blog/Articles/MathLeveling/MathLeveling";
import Trello from "./components/Blog/Articles/Trello/Trello";
import BrainDrain from "./components/Blog/Articles/BrainDrain/BrainDrain";
import HistoryApp from "./components/Blog/Articles/HistoryApp/HistoryApp";
import Badges from "./components/Blog/Articles/Badges/Badges";
import WorstStudent from "./components/Blog/Articles/WorstStudent/WorstStudent";


import './styles/style.css';



function App() {

  

  return (
    <div className="App">

      

       {/* 
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
      */}  

      <Router>
        <Navbar/>
        
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/download_worksheets" component={Download_Worksheets}/>
          <Route path="/tos" component={ToS}/>
          <Route path="/privacy" component={Privacy}/>
          <Route path="/app" component={HomePage}/>

          <Route path="/math-leveling" component={MGXHome}/>
          <Route path="/blog" component={BlogHome}/>
          <Route path="/almost-done" component={AlmostDone}/>
          <Route path="/think-they-finished" component={ThinkTheyFinished}/>
          <Route path="/fantasy-world" component={FantasyWorld}/>
          <Route path="/mathleveling" component={MathLeveling}/>
          <Route path="/trello" component={Trello}/>
          <Route path="/braindrain" component={BrainDrain}/>
          <Route path="/historyapp" component={HistoryApp}/>
          <Route path="/badges" component={Badges}/>
          <Route path="/worststudent" component={WorstStudent}/>

        </Switch>
        <Email_section />
        <Contact />
      </Router>
      
      
   
    </div>
  );
}

export default App;
