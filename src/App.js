import React from 'react';
import './assets/css/App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
    </div>
  );
}

export default App;
