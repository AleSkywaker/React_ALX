import React, { Component } from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component {
  state = {
    peliculas: [
      {
        titulo: 'Blade Runner',
        imagen:
          'https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/blade-runner-2049/32017954-10-esl-ES/blade-runner-2049.jpg'
      },
      {
        titulo: 'Septimo Sello',
        imagen: 'https://democresia.es/wp-content/uploads/2018/02/TheSeventhSeal1_source.jpg'
      },
      {
        titulo: 'Pulp Fiction',
        imagen: 'https://pics.filmaffinity.com/Pulp_Fiction-210382116-large.jpg'
      }
    ],
    nombre: 'Alex Colombo'
  };

  cambiarTitulo = () => {
    let { peliculas } = this.state;
    peliculas[2].titulo = 'Viaje a Marte';
    this.setState({
      peliculas
    });
  };

  favorita = e => {
    console.log('favorita marcada');
    console.log(e);
  };

  render() {
    return (
      <div id="content" className="peliculas">
        <h2 className="subheader">Peliculas</h2>
        <p>Peliculas favoritas de {this.state.nombre}</p>

        <button onClick={this.cambiarTitulo}>Cambiar nombre</button>
        <p>
          <strong>La pelicula favotira es : </strong> <span>X</span>
        </p>

        {/**Crear componentes peliculas */}
        <div id="articles" className="peliculas">
          {this.state.peliculas.map((peli, i) => {
            return <Pelicula key={i} pelicula={peli} marcarFavorita={this.favorita} />;
          })}
        </div>
      </div>
    );
  }
}
export default Peliculas;
