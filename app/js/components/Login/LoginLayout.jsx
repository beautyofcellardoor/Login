import React, { Component, PropTypes } from 'react';

import LoginHeader from "./LoginHeader.jsx"
import LoginAuth from "./LoginAuth.jsx"
import SignUp from "./SignUp.jsx"

export default class LoginLayout extends Component {

  render() {
    return (
      <div>
        <LoginHeader />
        <LoginAuth />
      </div>
    );
  }
}
