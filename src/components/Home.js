import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Home extends Component {
  render() {
    return (
      <div id="content">
        <Slider titulo="Bienvenidos al Blog de Alex" btn="Ir al blog" />
        <div className="center">
          <div className="content">
            <h1 className="subheader">últimos Articulos</h1>
          </div>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default Home;
