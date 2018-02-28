import React, { Component } from 'react';
import { connect } from 'react-redux';
import triage from '../triage.svg';
import logout from '../logout.svg';
import '../css/Header.css';
import '../css/GoogleBtn.css';

class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <header className="Header navbar-header">
          <div className="image-header">
            <img src={triage} className="Header-logo" alt="logo" />
            <a className="no-underline navbar-title" href="/triage/dashboard">
              T R I A G E
            </a>
            <a className="right component-title" href="/">
              <div className="logout-icon">
                <img src={logout} className="logout-icon" alt="logo" />
              </div>
              L O G O U T
            </a>
          </div>
        </header>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
