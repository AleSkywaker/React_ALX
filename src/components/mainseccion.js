import React, { Component } from 'react';

class Seccion extends Component {
  /*
  constructor(props) {
    super(props);

    this.state = {
      contador: 0
    };
  }
 */

  state = {
    contador: 0
  };
  sumar = e => {
    console.log(this);
    console.log(e);
    this.setState({
      contador: this.state.contador + 1
    });
  };
  restar = () => {
    this.setState({
      contador: this.state.contador - 1
    });
  };
  render() {
    return (
      <section id="content">
        <h2 className="subheader">Últimos articulos</h2>
        <section className="componentes">
          <h4>Estado</h4>
          <p>Contador : {this.state.contador}</p>
          <form>
            <input type="button" value="Sumar" onClick={this.sumar} />
            <input type="button" value="Restar" onClick={this.restar} />
          </form>
        </section>
      </section>
    );
  }
}

export default Seccion;
