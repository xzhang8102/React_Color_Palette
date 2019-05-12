import React from 'react';
import Palette from './Palette';
import seedColor from '../seedColor';
import { generatePalette } from '../colorVariation';
import '../styles/App.css';

class App extends React.Component {
  render() {
    console.log(generatePalette(seedColor[3]));
    return (
      <div>
        <Palette {...seedColor[3]} />
      </div>
    );
  }
}

export default App;
