'use strict'
import React, {Component, PropTypes} from 'react';

export default class LoginHeader extends Component {

    render() {
        return (
          <div>
              <h1 id="loginBanner">
                <img id="wireDeerHeader" src="../icons/wiredeer.svg" alt="patronusIcon"></img>
                <div id="loginHeaderText">AUGMENT</div>
              </h1>
          </div>
      );
    }
}
