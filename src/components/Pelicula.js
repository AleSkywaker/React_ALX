import React, { Component } from 'react';

class Pelicula extends Component {
  marcar = () => {
    this.props.marcarFavorita(this.props.pelicula);
  };
  render() {
    const { titulo, imagen } = this.props.pelicula;
    return (
      <article className="article-item" id="article-template">
        <div className="image-wrap">
          <img src={imagen} alt={titulo} />
        </div>

        <h2>{titulo}</h2>
        <span className="date">Hace 5 minutos</span>
        <a href="#">Leer más</a>
        {/*** Pasar datos del hijo al padre */}
        <button onClick={this.marcar}>Marcar como favorita</button>
        <div className="clearfix"></div>
      </article>
    );
  }
}

export default Pelicula;
