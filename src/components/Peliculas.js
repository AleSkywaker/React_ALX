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
        imagen:
          'https://d3cra5ec8gdi8w.cloudfront.net/uploads/imagenes/bajacalidad/2015/06/22/_cartel_87651de4.jpg?ffee570729db62f82dd1ae3aaac60a54'
      }
    ],
    nombre: 'Alex Colombo',
    favorita: {}
  };

  cambiarTitulo = () => {
    let { peliculas } = this.state;
    peliculas[2].titulo = 'Viaje a Marte';
    this.setState({
      peliculas
    });
  };

  favorita = peli => {
    this.setState({
      favorita: peli
    });
  };

  render() {
    let pStyle = {
      background: 'green',
      color: 'white',
      padding: '10px'
    };
    let favorita;
    if (this.state.favorita.titulo) {
      favorita = (
        <p className="favorita" style={pStyle}>
          <strong>La pelicula favotira es : </strong> <span>{this.state.favorita.titulo}</span>
        </p>
      );
    } else {
      favorita = (
        <p className="favorita">
          <strong>Todavia no ha elegido peli favorita</strong>
        </p>
      );
    }

    return (
      <div id="content" className="peliculas">
        <h2 className="subheader">Peliculas</h2>
        <p>Peliculas favoritas de {this.state.nombre}</p>

        <button onClick={this.cambiarTitulo}>Cambiar nombre</button>
        {this.state.favorita.titulo ? (
          <p className="favorita" style={pStyle}>
            <strong>La pelicula favotira es : </strong> <span>{this.state.favorita.titulo}</span>
          </p>
        ) : (
          <p>Ho hay Pelicula favorita</p>
        )}

        {<h4>{this.props.saludo}</h4>}

        {favorita}
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
