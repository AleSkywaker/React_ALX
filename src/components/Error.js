import React from 'react';

class Error extends React.Component {
  render() {
    return (
      <section id="content">
        <h2 className="subheader">Página no encontrada</h2>
        <p>La página a la intenta acceder no esta disponible.</p>
      </section>
    );
  }
}

export default Error;
