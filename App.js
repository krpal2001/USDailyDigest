import React from "react";
import { Component } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

// import Newsitem from "./Components/Newsitem";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
export default class App extends Component{

  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }

  
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }



    render(){
    return(
<div>

  <Router>
    <Navbar/>
    <LoadingBar
    height={3}
        color="#f11946"
        progress={this.state.progress}
      />
<Routes>
        <Route
          path="/"
          element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={9} country="us" category="general" />}
        />
      </Routes>

      <Routes>
        <Route
          path="/business"
          element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={9} country="us" category="business" />}
        />
      </Routes>
      <Routes>
        <Route
          path="/entertainment"
          element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={9} country="us" category="entertainment" />}
        />
      </Routes>
      <Routes>
        <Route
          path="/health"
          element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={9} country="us" category="health" />}
        />
      </Routes>
      <Routes>
        <Route
          path="/science"
          element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={9} country="us" category="science" />}
        />
      </Routes>
      <Routes>
        <Route
          path="/sports"
          element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={9} country="us" category="sports" />}
        />
      </Routes>
      <Routes>
        <Route
          path="/technology"
          element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={9} country="us" category="technology" />}
        />
      </Routes>


      </Router>
      </div>
    )
    }
}

