import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage";
import AboutPage from "./pages/aboutpage/aboutpage";

const API_releaseDate =
  "https://api.themoviedb.org/3/discover/movie?sort_by=primary_release_date.desc&vote_count.gte=4&api_key=04c35731a5ee918f014970082a0088b1&page=";
const API_popularity =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      pageNum: 1,
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

  async getMovies(url, pageNum) {
    let movieData = await fetch(url + pageNum)
      .then((res) => res.json())
      .then((res) => res.results);
    console.log(movieData);
    this.setState({
      data: movieData,
      pageNum,
    });
  }

  reset = () => {
    this.getMovies(API_releaseDate, 1);
  };

  componentDidMount() {
    this.getMovies(API_releaseDate, 1);
  }

  render() {
    const MyHomePage = ({ api = API_releaseDate }) => (
      <HomePage
        data={this.state.data}
        pageNum={this.state.pageNum}
        changePageNum={this.getMovies}
        apiMethod={api}
      />
    );
    const MyPopularPage = (props) => (
      <div className="popular-page">
        <h2 style={{ marginBottom: 0 }}>Most Popular</h2>
        <MyHomePage api={API_popularity} />
      </div>
    );
    return (
      <Router>
        <div className="App">
          <Header
            search={this.searchMovies}
            reset={this.reset}
            toPopular={() => this.getMovies(API_popularity, 1)}
          />
          <Switch>
            <Route exact path="/" component={MyHomePage} />
            <Route exact path="/popular" component={MyPopularPage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
