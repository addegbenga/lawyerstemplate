import React from "react";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}
