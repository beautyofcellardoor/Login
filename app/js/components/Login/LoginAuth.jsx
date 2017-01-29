'use strict'
import React, {Component, PropTypes} from 'react';

export default class LoginAuth extends Component {

    render() {
        return (
          <div>
            <div className="center" id="loginBox">
                <img id="wireDeerLogin" src="../icons/wiredeer.svg" alt="patronusIcon"></img>
                <div id="loginUsernameWrapper"><input id="loginUsername" type="text" placeholder="username"></input></div>
                <div id="loginPasswordWrapper"><input id="loginPassword" type="text" placeholder="password"></input></div>
                <div id="loginButtonWrapper"><button id="loginButton" type="submit">login</button></div>
                <div className="rememberMeCheckBox" id="rememberMeWrapper">
                  <input id="rememberMe" type="checkbox" ></input>
                  remember me
                  <label htmlFor="checkboxInput"></label>
                </div>
                <div id="forgotPassword"><a>Forgot Password?</a></div>
                <div id="signUp"><a href="../SignUp/">Sign Up</a></div>
            </div>
          </div>
      );
    }
}
