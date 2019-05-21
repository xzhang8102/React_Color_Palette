import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import seedColor from '../seedColor';
import { generatePalette } from '../colorVariation';
import '../styles/App.css';

class App extends React.Component {
  findPalette(id) {
    return seedColor.find(palette => {
      return palette.id === id;
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              <PaletteList palettes={seedColor} {...routeProps} />
            )}
          />
          <Route
            exact
            path="/palette/:id"
            render={routeProps => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={routeProps => <SingleColorPalette />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
