import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/ProfilePage/ProfillePage";
import Footer from "./components/Footer/Footer";
import GoogleBookSearch from "./components/AllBooksPage/GoogleBookSearchComponent";
import BooksPage from "./components/AllBooksPage/BooksPage";
import LoadingComponent from "./components/LoadingComponent/LoadingComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/books">
            <BooksPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/booksearch">
            <GoogleBookSearch />
          </Route>
          <Route path="/test">
            <LoadingComponent />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
