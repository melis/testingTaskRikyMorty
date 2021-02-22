import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Cards from '../Cards/Cards';
import Person from '../Person/Person';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Cards} />
      <Route path="/:personId" exact component={Person} />
    </Router>
  );
};

export default App;
