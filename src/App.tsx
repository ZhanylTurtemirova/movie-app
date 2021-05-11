import HomePage from "./pages/HomePage";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import MoviesPage from "./pages/MoviePage/MoviePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/search" component={HomePage} />
        <Route path="/movies/:id" component={MoviesPage}></Route>
        <Route path={"*"} component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
