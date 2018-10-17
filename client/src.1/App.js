import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Article";
import SavedArticles from "./pages/SavedArticles";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path= "/search" component={Articles} />
        <Route exact path="/saved/" component={SavedArticles} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
