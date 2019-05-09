import React from 'react';
import Palette from './Palette';
import seedColor from '../seedColor';

class App extends React.Component {
  render() {
    return (
      <div>
        <Palette {...seedColor[4]} />
      </div>
    );
  }
}

export default App;
