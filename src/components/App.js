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
  state = {
    palettes: seedColor
  };

  findPalette(id) {
    return this.state.palettes.find(palette => {
      return palette.id === id;
    });
  }

  savePalette = newPalette => {
    this.setState({
      palettes: [...this.state.palettes, newPalette]
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/palette/new"
            render={routeProps => (
              <CreateNewPalette
                savePalette={this.savePalette}
                {...routeProps}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={routeProps => (
              <PaletteList palettes={this.state.palettes} {...routeProps} />
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
