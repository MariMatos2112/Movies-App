import React from "react";
import Lists from "./Pages/Lists";
import Main from "./Pages/Main";
import Search from "./Pages/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./Pages/Details";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/lists" component={Lists} />
        <Route path="/search" component={Search} />
        <Route path="/details/:type/:id" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
