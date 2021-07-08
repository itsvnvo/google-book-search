import React from "react";
import 'bootswatch/dist/lumen/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Saved from "./pages/Saved/index";
import Search from "./pages/Search/index";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;