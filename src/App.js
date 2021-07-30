import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookDetailsPage from "./components/OneBookDetailsPage/BookDetailsPage";
import Test from "./components/test1";
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/ProfilePage/ProfillePage";
import Footer from "./components/Footer/Footer";
import GoogleBookSearch from "./components/AllBooksPage/GoogleBookSearchComponent";
import BooksPage from "./components/AllBooksPage/BooksPage";
// import GoogleBooks from "./components/Test2/GoogleBooks";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/books">
            {/* <GoogleBooks/> */}
            <BooksPage/>
          </Route>
          <Route path="/bookdetailspage">
            <BookDetailsPage />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/booksearch">
            <GoogleBookSearch />
          </Route>
        </Switch>

        {/* <Footer /> */}

      </div>
    </Router>
  );
}

export default App;
