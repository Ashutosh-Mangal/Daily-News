import React, { Component } from 'react'
import NavBar from './NavBar';
import News from './News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

   page_size=6;

   apiKey=process.env.REACT_APP_NEWS_API2
   
  
   state={
    progress:0
   }

   setProgress=(progress)=>{
    this.setState({
      progress: progress
    })
   }

  render() {
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
        <Switch>
          <Route exact path="/"><News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.page_size} country="in" category="general"/></Route> 
          <Route exact path="/business"><News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.page_size} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.page_size} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.page_size} country="in" category="general"/></Route> 
          <Route exact path="/health"><News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.page_size} country="in" category="health"/></Route> 
          <Route exact path="/science"><News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.page_size} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.page_size} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.page_size} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
  }
}