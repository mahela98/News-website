import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/ProfilePage/ProfillePage";
import Footer from "./components/Footer/Footer";
import GoogleBookSearch from "./components/AllBooksPage/GoogleBookSearchComponent";
import BooksPage from "./components/AllBooksPage/BooksPage";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import NewsPageComponent from "./components/NewsPageComponent/NewsPageComponent";
import MovieMainPage from "./components/MoviePageComponent/MovieMainPage";
import MovieFullInfo from "./components/MoviePageComponent/MovieFullInfoComponent";
import ProtectedRoute from './auth/protected-route';
import ScrollToTop from "./ScroleToTop/ScroleToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <ScrollToTop>

          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/books" component={BooksPage} />
          <ProtectedRoute path="/profile" component={ProfilePage} />
          <Route path="/booksearch">
            <GoogleBookSearch />
          </Route>
          {/* <Route path="/test">
            <LoadingComponent />
          </Route> */}
          <Route path="/news" component={NewsPageComponent} />
          <Route path="/movie" component={MovieMainPage} />
          <Route path="/movieinfo" component={MovieFullInfo} />
              </ScrollToTop>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
