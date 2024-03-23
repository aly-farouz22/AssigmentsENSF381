import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/products" component={Productpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
