import { Container } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import movies from "./Pages/Movies/movies";
import search from "./Pages/Search/search";
import trending from "./Pages/Trending/trending";
import tvshows from "./Pages/TvShows/tvshows";

function App() {
  return (
    <BrowserRouter>
      <Header />
    <div className="app">
    <Container>
      <Switch>
        <Route path="/" component={trending} exact />
        <Route path="/movies" component={movies} />
        <Route path="/tvshows" component={tvshows} />
        <Route path="/search" component={search} />
      </Switch>
    </Container>
        </div>

    <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
