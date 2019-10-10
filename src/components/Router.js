import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Seccion from './Mainseccion';
import Peliculas from './Peliculas';
import Error from './Error';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/*Configurar rutas y páginas*/}
        <Switch>
          <Route exact path="/" component={Peliculas} />
          <Route exact path="/prueba" component={Seccion} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
