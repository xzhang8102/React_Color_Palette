import React from 'react';
import Palette from './Palette';
import seedColor from '../seedColor';
import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Palette {...seedColor[3]} />
      </div>
    );
  }
}

export default App;
