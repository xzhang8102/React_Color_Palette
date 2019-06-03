import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from '../components/RouteAnimationWrapper';
import Palette from './Palette';
import PaletteList from './PaletteList';
import CreateNewPalette from './CreateNewPalette';
import SingleColorPalette from './SingleColorPalette';
import seedColor from '../seedColor';
import { generatePalette } from '../colorVariation';
import styles from '../styles/AppStyles';

class App extends React.Component {
  state = {
    palettes: JSON.parse(window.localStorage.getItem('palettes')) || seedColor
  };

  findPalette(id) {
    return this.state.palettes.find(palette => {
      return palette.id === id;
    });
  }

  deletePalette = id => {
    this.setState(
      prevState => ({
        palettes: prevState.palettes.filter(palette => palette.id !== id)
      }),
      this.syncLocalStorage
    );
  };

  savePalette = newPalette => {
    this.setState(
      {
        palettes: [...this.state.palettes, newPalette]
      },
      this.syncLocalStorage
    );
  };

  syncLocalStorage = () => {
    window.localStorage.setItem(
      'palettes',
      JSON.stringify(this.state.palettes)
    );
  };

  render() {
    return (
      <BrowserRouter>
        <Route
          render={routeProps => (
            <TransitionGroup>
              <CSSTransition
                key={routeProps.location.key}
                classNames="fade"
                timeout={500}
              >
                <Switch location={routeProps.location}>
                  {/* create new palette */}
                  <Route
                    exact
                    path="/palette/new"
                    render={routeProps => (
                      <Page>
                        <CreateNewPalette
                          savePalette={this.savePalette}
                          palettes={this.state.palettes}
                          {...routeProps}
                        />
                      </Page>
                    )}
                  />
                  {/* front page with all snapshots of existing palette */}
                  <Route
                    exact
                    path="/"
                    render={routeProps => (
                      <Page>
                        <PaletteList
                          palettes={this.state.palettes}
                          {...routeProps}
                          deletePalette={this.deletePalette}
                        />
                      </Page>
                    )}
                  />
                  {/* display the detailed palette page when click on the front page */}
                  <Route
                    exact
                    path="/palette/:id"
                    render={routeProps => (
                      <Page>
                        <Palette
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.id)
                          )}
                        />
                      </Page>
                    )}
                  />
                  {/* display the detailed color palette page when click on the palette page */}
                  <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={routeProps => (
                      <Page>
                        <SingleColorPalette
                          selectedColor={routeProps.match.params.colorId}
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.paletteId)
                          )}
                        />
                      </Page>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
