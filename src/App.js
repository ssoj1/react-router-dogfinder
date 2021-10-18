import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Nav from "./Nav";
import axios from "axios";
import Routes from "./Routes";

/** App for displaying dogs and info
 * 
 * Props: 
 * - none
 * 
 * State: 
 * - dogs - an array of objects with dog info like:
 * [{name, age, src, facts}, ...]
 * - isLoading - boolean
 * 
 * App -> { Nav, Routes }
 */
function App() {
  const [dogs, setDogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log("APP", dogs, isLoading);
  
  /** makes a GET request for dog data*/
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

  return (
    <div className="App">
      <BrowserRouter>
        <Nav names={names} />
        <Routes dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
