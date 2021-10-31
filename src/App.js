import React from "react";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Navbar from "./utils/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}
