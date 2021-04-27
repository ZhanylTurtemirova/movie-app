import HomePage from "./pages/HomePage";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movies/:id" component={MoviesPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
