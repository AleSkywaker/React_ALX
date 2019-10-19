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
                <NavLink to="/home" activeClassName="active">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/prueba" activeClassName="active">
                  prueba
                </NavLink>
              </li>
              <li>
                <NavLink to="/pagina1" activeClassName="active">
                  pagina1
                </NavLink>
              </li>
              <li>
                <NavLink to="/parametros" activeClassName="active">
                  parametros
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/">otros</NavLink>
              </li> */}
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
