import BooksPage from "./components/BooksPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookDetailsPage from "./components/BookDetailsPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <BooksPage />
          </Route>
          <Route path="/bookdetailspage">
            <BookDetailsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
