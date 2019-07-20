import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Routing from './routes';

class App extends Component {
  render() {
    return (
      <div className="my-app">
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a href="/#" className="navbar-item">
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="DEVAHOY LOGO" width="112" height="28"/>
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                <NavLink to="/posts" activeClassName="is-active" className="navbar-item">Posts</NavLink>
                <NavLink to="/projects" activeClassName="is-active" className="navbar-item">Projects</NavLink>
                <NavLink to="/about" activeClassName="is-active" className="navbar-item">About</NavLink>
              </div>
            </div>
          </div>
        </nav>
        <Routing />
      </div>
    )
  }
};

export default App;