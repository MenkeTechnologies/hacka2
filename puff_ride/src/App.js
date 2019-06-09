import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import SignUp from './SignUp'
import {Login} from './Login'

import { simpleAction } from './actions/simpleAction'

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = (dispatch) => ({
    emailOnChange: (e) =>(dispatch({ type: "EMAIL_UPDATE", email: e.target.value })),
    passOnChange: (e) =>(dispatch({ type: "PASS_UPDATE", pass: e.target.value })),
    loginDispatch: (e) =>(dispatch({ type: "LOGIN"}))
})

/* 
 * mapStateToProps
*/
const mapStateToProps = (state) => {
  return{
      simpleReducer: state.simpleReducer
  }
};

const LoginWithState = connect(mapStateToProps, mapDispatchToProps)(({emailOnChange, passOnChange, loginDispatch, simpleReducer})=>{
    console.log(simpleReducer)
    console.log(passOnChange)
    return <Login state={simpleReducer} emailAction={emailOnChange} passAction={passOnChange} loginAction={loginDispatch}/>
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
          <Route path = "/" component={LoginWithState}/>
      </Router>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
