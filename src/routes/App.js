import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Palette from './Palette';
import PaletteList from './PaletteList';
import CreateNewPalette from './CreateNewPalette';
import SingleColorPalette from './SingleColorPalette';
import seedColor from '../seedColor';
import { generatePalette } from '../colorVariation';
import styles from '../styles/AppStyles';

class App extends React.Component {
  savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));

  state = {
    palettes: this.savedPaletts || seedColor
  };

  findPalette(id) {
    return this.state.palettes.find(palette => {
      return palette.id === id;
    });
  }

  savePalette = newPalette => {
    this.setState(
      {
        palettes: [...this.state.palettes, newPalette]
      },
      this.syncLocalStorage
    );
  };

  syncLocalStorage = () => {
    window.localStorage.setItem('palette', JSON.stringify(this.state.palettes));
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* create new palette */}
          <Route
            exact
            path="/palette/new"
            render={routeProps => (
              <CreateNewPalette
                savePalette={this.savePalette}
                palettes={this.state.palettes}
                {...routeProps}
              />
            )}
          />
          {/* front page with all snapshots of existing palette */}
          <Route
            exact
            path="/"
            render={routeProps => (
              <PaletteList palettes={this.state.palettes} {...routeProps} />
            )}
          />
          {/* display the detailed palette page when click on the front page */}
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
          {/* display the detailed color palette page when click on the palette page */}
          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={routeProps => (
              <SingleColorPalette
                selectedColor={routeProps.match.params.colorId}
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId)
                )}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
