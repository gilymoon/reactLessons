import React from "react";
import Users from "./Users";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <div className="page">
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/users">Users</Link>
        </li>
        <li className="navigation__item">
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users" component={Users}/>
      </Switch>
    </div>
  );
};

export default App;
