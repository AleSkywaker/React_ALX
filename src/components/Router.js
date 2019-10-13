import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Seccion from './Mainseccion';
import Peliculas from './Peliculas';
import Error from './Error';
import { CLIENT_RENEG_LIMIT } from 'tls';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/*Configurar rutas y páginas*/}
        <Switch>
          <Route exact path="/" component={Peliculas} />
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
              let id = props.match.params.id;
              console.log(id);
              return (
                <div id="content">
                  <h1 className="subheader">Hola {id} !! :)</h1>
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
