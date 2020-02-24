import React, { useState } from "react";
import { BrowserRouter as Router, Route } from 
"react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import { BubblesContext } from "./context/BubblesContext";
import Bubbles from "./components/Bubbles";

function App() {
  const [bubbles, setBubbles]=useState([]);
  return (
    <Router>
      <BubblesContext.Provider value={Bubbles, setBubbles}>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
      </BubblesContext.Provider>
    </Router>
  );
}

export default App;
