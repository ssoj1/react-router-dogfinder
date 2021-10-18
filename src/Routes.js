import React, { useState } from "react";
import "./App.css";
import {  Route, Switch, Redirect } from "react-router-dom";

import DogList from "./DogList";
import DogDetails from "./DogDetails";


/** Component for routing
 * 
 *  Props: 
 * - dogs - an array of objects with dog info like:
 * [{name, age, src, facts}, ...]
 * 
 * State: 
 * - none
 * 
 * App -> Routes
 */
function Routes({ dogs }) {
    console.log("Routes", dogs);

    return (
      <Switch>
          <Route exact path="/dogs">
            <DogList dogs={dogs} />
          </Route>
          <Route exact path="/dogs/:name">
            <DogDetails dogs={dogs} />
          </Route>
          <Redirect to="/dogs" />
      </Switch>
    );
  }
  
  export default Routes;