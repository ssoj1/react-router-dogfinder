import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import axios from "axios";

/**  */
function App() {
  const [dogs, setDogs] = useState(getDogs);
  const [names, setNames] = useState([]);

  /**  */
  async function getDogs() {
    let response = await axios({ url: "http://localhost:5000/dogs" });
    setDogs(response.data);
    setNames(response.data.map((dog) => dog.name));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav names={names} />
        <Switch>
          <Route exact path="/dogs">
            <DogList dogs={dogs} />
          </Route>
          <Route exact path="/dogs/:name">
            <DogDetails />
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
