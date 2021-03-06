import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cards from "../Cards/Cards";
import Person from "../Person/Person";
import Error from "../Error/Error";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Cards} />
        <Route path="/:personId" exact component={Person} />

        <Route>
          <Error info="Sorry, the page you visited does not exist." />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
