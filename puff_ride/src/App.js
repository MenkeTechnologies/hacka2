import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Redirect} from "react-router-dom"
import './App.css';
import {SignUp} from './SignUp'
import {Login} from './Login'
import {Schedule} from './Schedule'
import {DashBoard} from './DashBoard'
import { simpleAction } from './actions/simpleAction'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {Ride} from './Ride'
import history from './history'


let baseUrl = "http://10.248.35.68:8080";
let contextPath = "/puffride/api/v1";
let unmatchedSchedulesApi = "/schedule/findSchedulesWithNoRidesByEmail";
let matchedSchedulesApi = "/schedule/findSchedulesWithRidesByEmail";

function fetchPostWrapper(body, endpoint) {
    fetch(baseUrl + contextPath + endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then((res) => res.json()).then((resp) => {
        // console.log('\n_____________=', resp, '_____________\n');
        console.log(resp)
        return (resp);
    });
}

/*
 * mapDispatchToProps
*/
const mapDispatchToProps = (dispatch) => ({
    emailOnChange: (e) => (dispatch({type: "EMAIL_UPDATE", email: e.target.value})),
    passOnChange: (e) => (dispatch({type: "PASS_UPDATE", pass: e.target.value})),
    loginDispatch: (e, email, password) => {

        let body = {
            email: email,
            password: password
        };
        fetch(baseUrl + contextPath + "/user/findByEmail", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((res) => res.json()).then((resp) => {
            // console.log('\n_____________=', resp, '_____________\n');
            console.log(resp)

            // this.props.history.push('/DashBoard')
            if(resp.length > 0){
                console.log("user found")
                // this.props.history.push('/DashBoard')
                dispatch({type:"LOGGED_IN", payload: resp});

                let body = {
                  email: email
                };
                fetch(baseUrl + contextPath + unmatchedSchedulesApi, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(body)
                })
                  .then((res) => res.json()).then((resp) => {
                    console.log("transfering data to reducer")
                    dispatch({type:"DASH_UNMATCHED", payload: resp});
                  });
                fetch(baseUrl + contextPath + matchedSchedulesApi, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(body)
                })
                  .then((res) => res.json()).then((resp) => {
                    console.log("transfering data to reducer")
                    dispatch({type:"DASH_MATCHED", payload: resp});
                    return history.push('/DashBoard')
                  });
                }
                
            });
        // if(response.length > 0){
        //     this.props.history.push('/foo')
        // }
        return dispatch({type: "LOGIN"})
    },
    signUpDispatch: (e, name, email, password, biography) => (dispatch({
        type: "SIGNUP_ACTION", value: {
            name: name,
            email: email,
            password: password,
            biography: biography
        }
    })),
    scheduleDispatch: (dow, orig, des, time, start, end, driver) => (dispatch({
        type: "SCHEDULE_ACTION", value : {
            dow, orig, des, time, start, end, driver
        }
    })),
});

/* 
 * mapStateToProps
*/
const mapStateToProps = (state) => {
    return {
        simpleReducer: state.simpleReducer
    }
};

const LoginWithState = connect(mapStateToProps, mapDispatchToProps)(({emailOnChange, passOnChange, loginDispatch, simpleReducer}) => {
    console.log(simpleReducer);
    console.log(passOnChange);
    return <Login state={simpleReducer} emailAction={emailOnChange} passAction={passOnChange}
                  loginAction={loginDispatch}/>
})

const SignUpWithState = connect(mapStateToProps, mapDispatchToProps)(({signUpDispatch}) => {
    console.log("sign up action invoked")
    return <SignUp signUpAction={signUpDispatch}/>
})

// Schedule wrapper
const ScheduleWithState = connect(mapStateToProps, mapDispatchToProps)(({scheduleDispatch}) => {
    console.log("Schedule board hello")
    return <Schedule scheduleAction={scheduleDispatch}/>
})

const DashBoardWithState = connect(mapStateToProps, mapDispatchToProps)(({dashDispatch, simpleReducer}) => {
    console.log("dash boarding hello")
    return <DashBoard dashAction={dashDispatch} state = {simpleReducer}/>
})

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}));


const RideWithState = connect(mapStateToProps, mapDispatchToProps)(({simpleReducer})=>{
    return <Ride state = {simpleReducer}/>
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

        let marginStyle = {
            margin: "10px",
            textDecoration: "none"
        };
        return <div>
            <Router>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>

                        <Typography variant="h6">
                            PuffRide
                        </Typography>
                        <Link to="/Login" variant="body2"
                              style={marginStyle}
                        >
                            <Button
                                type="button"
                                variant="contained"
                                color="secondary"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link to="/SignUp" variant="body2"
                              style={marginStyle}
                        >
                            <Button
                                type="button"
                                variant="contained"
                                color="secondary"
                            >
                                Signup
                                <FontAwesomeIcon icon={faCheckCircle}/>
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
                <Route path = "/DashBoard" component={DashBoardWithState}/>
                <Route path="/SignUp" component={SignUpWithState}/>
                <Route path="/Login" component={LoginWithState}/>
                <Route path="/Schedule" component={ScheduleWithState}/>
                <Route exact path="/" component={LoginWithState}/>
                <Route path = "/Ride" component={RideWithState}/>
            </Router>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
