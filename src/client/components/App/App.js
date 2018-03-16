import React from 'react';

import './App.css';
import Visualizer from '../Visualizer/Visualizer';

const App = (props) => {
  const p = { ...props };
  return (<div>
    <Visualizer />
  </div>);
};

export default App;
