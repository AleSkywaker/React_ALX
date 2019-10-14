import React, { Component } from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/* LOGO */}
          <div id="logo">
            <img src={logo} className="app-logo" alt="Logotipo" />
            <span id="brand">
              <strong>React</strong>for Alex
            </span>
          </div>

          {/* MENU */}
          <nav id="menu">
            <ul>
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
            </ul>
          </nav>

          {/* LIMPIAR FLOTADOS */}
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

export default Header;
