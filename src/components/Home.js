import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div id="content">
        <Slider titulo="Bienvenidos al Blog de Alex" />
        <h1 className="subheader">últimos Articulos</h1>
      </div>
    );
  }
}

export default Home;
