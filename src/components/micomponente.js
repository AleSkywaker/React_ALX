import React, { Component } from 'react';

class MiComponente extends Component {
  render() {
    let receta = {
      comida: 'Pizza',
      ingredientes: ['jamon york', 'cebolla', 'pimiento verde', 'aceitunas negras']
    };

    return (
      <div>
        <h1>Hola Alex desde new component</h1>
        <h2>Que tal tron</h2>
      </div>
    );
  }
}

export default MiComponente;
