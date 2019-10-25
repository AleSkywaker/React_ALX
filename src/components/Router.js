import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Seccion from './Mainseccion';
import Peliculas from './Peliculas';
import Home from './Home';
import Error from './Error';

import Header from './Header';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        {/*Configurar rutas y páginas*/}
        <Switch>
          <Route exact path="/" component={Peliculas} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/prueba" component={Seccion} />
          <Route
            exact
            path="/pagina1"
            render={() => (
              <React.Fragment>
                <h1>Hola Alex</h1>
                <Peliculas saludo="Hola Alex guapo" />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/parametros/:id?"
            render={props => {
              let nombre = props.match.params.id;
              let otro = 'unknow';
              console.log(nombre);
              return (
                <div id="content">
                  <h1 className="subheader">
                    Hola {nombre && nombre} {!nombre && otro}!! 🔥
                  </h1>
                </div>
              );
            }}
          />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
