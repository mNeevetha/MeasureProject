import React, { Component } from 'react';
import { Route } from 'react-router';

import CreateMeasurePage from './CreateMeasurePage';
import MeasureDetailsPage from './MeasureDetailsPage';
import SelectDatasetPage from './SelectDatasetPage';

class App extends Component {

  render() {

    return (
      <div className="app">
        <div className="app-content">
        <Route component={CreateMeasurePage} path="/home" />
        <Route component={MeasureDetailsPage} exact path="/measure-details" />
        <Route component={SelectDatasetPage} exact path="/select-dataset" />
        </div>
      </div>
    );
  }
}

export default App;
