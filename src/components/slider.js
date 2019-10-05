import React, { Component } from 'react';
import { tsConstructorType } from '@babel/types';

class Slider extends Component {
  render() {
    console.log(this.props);
    return (
      <div id="slider" className="slider-big">
        <h1>{this.props.titulo}</h1>
        <a href="#" className="btn-white">
          Ir al blog
        </a>
      </div>
    );
  }
}

export default Slider;
