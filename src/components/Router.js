import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/*Configurar rutas y páginas*/}
        <Switch></Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
