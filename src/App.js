import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import { useEffect, useState } from "react";

//

const API_URL = "https://www.omdbapi.com?apikey=9f89d873";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app">
      <h1>MovieZone</h1>
      <div className="search">
        <input
          placeholder="Search Movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="emplty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
