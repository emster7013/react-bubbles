import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import BubblesContext from './context/BubblesContext';

function App() {
  const [bubbles, setBubbles]=useState([]);
  return (
    <Router>
      <BubblesContext.Provider value={{bubbles, setBubbles}}>
      <div className="App">
      <Switch>
          {/* 
            Build a PrivateRoute component that will 
            display BubblePage when you're authenticated 
          */}
          <PrivateRoute exact path="/protected" component={BubblePage} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
      </BubblesContext.Provider>
    </Router>
  );
}

export default App;
