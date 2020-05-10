import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Note from "./containers/Note";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
  <Route exact path="/note" component={Note}>
    <Note />
  </Route>
   
    </Switch>
  );
}