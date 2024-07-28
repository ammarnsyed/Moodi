import React from 'react';
import MoodSlider from './components/MoodSlider';
import Overview from './components/Overview';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MoodSlider} />
          <Route path="/overview" component={Overview} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
