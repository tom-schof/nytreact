import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Home} />
        <Route exact path="/articles/:id" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;