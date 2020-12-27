import React, { useState } from "react";
import Lists from "./Pages/Lists";
import Main from "./Pages/Main";
import Search from "./Pages/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./Pages/Details";
import MyList from "./Pages/MyList";
import { MyListContext } from "./Contexts/MyListContext";

function App() {
  const [favs, setFavs] = useState([]);

  return (
    <Router>
      <Switch>
        <MyListContext.Provider value={{favs, setFavs}}>
          <Route path="/" exact component={Main} />
          <Route path="/lists" component={Lists} />
          <Route path="/search" component={Search} />
          <Route path="/my-list" component={MyList} />
          <Route path="/details/:type/:id" component={Details} />
        </MyListContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
