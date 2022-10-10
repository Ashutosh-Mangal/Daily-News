
import './App.css';
import React, { useState } from 'react'
import NavBar from './NavBar';
import News from './News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import Signup from './components/Signup';
import Login from './components/Login';
import { Alert } from './components/Alert';
// import { Home } from './components/Home';
import About from './components/About';


const App = ()=> {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API2
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar showAlert={showAlert}/> 
        <Alert alert={alert}/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
      <Alert alert={alert}/>
      <div className="container">
        <Switch>
          {/* <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route>  */}
          <Route exact path="/">{!localStorage.getItem('token') ? <About /> : <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}</Route>
          <Route exact path="/about">
                <About />
              </Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" /></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" searchby='top-headlines'/></Route> 
          {/* <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" searchby='top-headlines'/ ></Route>  */}
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" searchby='top-headlines'/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" searchby='top-headlines'/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" searchby='top-headlines'/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" searchby='top-headlines'/></Route> 
          <Route exact path="/login">
                <Login showAlert={showAlert} />
              </Route>
              <Route exact path="/signup">
                <Signup showAlert={showAlert}/>
              </Route>
        </Switch>
        </div>
        </Router>
      </div>
    )
 
}

export default App;