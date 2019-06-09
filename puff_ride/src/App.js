import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp'
import Login from './Login'

import { simpleAction } from './actions/simpleAction'

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
      return<Router>
          <Route path = "/SignUp" component={SignUp}/>
          <Route path = "/" component={Login}/>
      </Router>

    // if(this.props.simpleReducer.status === "not logged in"){
    //   return <SignUp/>
    // }
    // else{
    //   return <div> HEllO WORLD! </div>
    // }
    //   return <SignUp/>
    // }
    // else{
    //   return <div> HEllO WORLD! </div>
    // }
    //   return <SignUp/>
    // }
    // else{
    //   return <div> HEllO WORLD! </div>
    // }
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <pre>
    //       {
    //         JSON.stringify(this.props)
    //       }
    //     </pre>
    //     <button onClick={this.simpleAction}>Test redux action</button>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
