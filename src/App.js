import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage";
import AboutPage from "./pages/aboutpage/aboutpage";
import ContactPage from "./pages/contactpage/contactpage";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
    this.searchMovies = this.searchMovies.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  async searchMovies(text) {
    let movieData = await fetch(SEARCHAPI + text)
      .then((res) => res.json())
      .then((res) => res.results);
    console.log(movieData);
    this.setState({
      data: movieData,
    });
  }

  async getMovies(pageNum) {
    let movieData = await fetch(APIURL + pageNum)
      .then((res) => res.json())
      .then((res) => res.results);
    console.log(movieData);
    this.setState({
      data: movieData,
    });
  }

  reset = () => {
    this.getMovies(1);
  };

  componentDidMount() {
    this.getMovies(1);
  }

  render() {
    const myHomePage = (props) => <HomePage data={this.state.data} />;
    return (
      <Router>
        <div className="App">
          <Header search={this.searchMovies} reset={this.reset} />
          <Switch>
            <Route exact path="/" component={myHomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contacts" component={ContactPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
