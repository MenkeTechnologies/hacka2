import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './App.css';
import {SignUp} from './SignUp'
import {Login} from './Login'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";


/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = (dispatch) => ({
    emailOnChange: (e) => (dispatch({type: "EMAIL_UPDATE", email: e.target.value})),
    passOnChange: (e) => (dispatch({type: "PASS_UPDATE", pass: e.target.value})),
    loginDispatch: (e) => (dispatch({type: "LOGIN"})),
    signUpDispatch: (e, name, email, password, biography) => (dispatch({
        type: "SIGNUP_ACTION", value: {
            name: name,
            email: email,
            password: password,
            biography: biography
        }
    }))
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
                <Route path="/SignUp" component={SignUpWithState}/>
                <Route path="/Login" component={LoginWithState}/>
                <Route exact path="/" component={LoginWithState}/>
            </Router>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
