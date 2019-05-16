import React from 'react';
import Palette from './Palette';
import seedColor from '../seedColor';
import { generatePalette } from '../colorVariation';
import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Palette palette={generatePalette(seedColor[4])} />
      </>
    );
  }
}

export default App;
