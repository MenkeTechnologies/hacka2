import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import {SignUp} from './SignUp'
import {Login} from './Login'
import DashBoard from './DashBoard'
import { simpleAction } from './actions/simpleAction'

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = (dispatch) => ({
    emailOnChange: (e) =>(dispatch({ type: "EMAIL_UPDATE", email: e.target.value })),
    passOnChange: (e) =>(dispatch({ type: "PASS_UPDATE", pass: e.target.value })),
    loginDispatch: (e) =>(dispatch({ type: "LOGIN"})),
    signUpDispatch: (e, name, email, password, biography) =>(dispatch({ type: "SIGNUP_ACTION", value: {name: name,
                                                                                                       email: email,
                                                                                                       password: password,
                                                                                                       biography: biography }}))
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

const SignUpWithState = connect(mapStateToProps, mapDispatchToProps)(({signUpDispatch})=>{
  console.log("sign up action invoked")
  return <SignUp signUpAction={signUpDispatch}/>
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
          <Route path = "/SignUp" component={SignUpWithState}/>
          <Route path = "/Login" component={LoginWithState}/>
          <Route path = "/DashBoard" component={DashBoard}/>
      </Router>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
