import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Palette from './Palette';
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
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
