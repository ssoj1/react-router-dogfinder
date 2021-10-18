import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import axios from "axios";

/**  */
function App() {
  const [dogs, setDogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log("APP", dogs, isLoading);
  /**  */
  async function getDogs() {
    let response = await axios({ url: "http://localhost:5000/dogs" });
    setDogs(response.data);
  }

  if (!dogs) {
    if (isLoading) {
      setIsLoading(false);
      getDogs();
    }
    return <p>Loading...</p>;
  }

  const names = dogs.map((dog) => dog.name);
  console.log(dogs, "why is this not working?");

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
