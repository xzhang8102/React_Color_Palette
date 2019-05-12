import React from 'react';
import Palette from './Palette';
import seedColor from '../seedColor';
import { generatePalette } from '../colorVariation';
import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedColor[4])} />
      </div>
    );
  }
}

export default App;
