import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./Components/MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      Title: "The Mask",
      Year: "1994",
      imdbID: "tt0110475",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWExYjI5MzktNTRhNi00Nzg2LThkZmQtYWVkYjRlYWI2MDQ4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Mask of Zorro",
      Year: "1998",
      imdbID: "tt0120746",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzg4ZjQ4OGUtZjkxMi00Y2I2LWEzNTAtODI2ZjkxMGVjNTQwXkEyXkFqcGdeQXVyNjgxNTAwNjQ@._V1_SX300.jpg",
    },
    {
      Title: "The Man in the Iron Mask",
      Year: "1998",
      imdbID: "tt0120744",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjM2YzcxMmQtOTc2Mi00YjdhLWFlZjUtNmFmMDQzYzU2YTk5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Son of the Mask",
      Year: "2005",
      imdbID: "tt0362165",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTIxNzA5NzIzOV5BMl5BanBnXkFtZTcwOTc5NzcyMQ@@._V1_SX300.jpg",
    },
    {
      Title: "Batman: Mask of the Phantasm",
      Year: "1993",
      imdbID: "tt0106364",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTRiMWM3MGItNjAxZC00M2E3LThhODgtM2QwOGNmZGU4OWZhXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
    },
    {
      Title: "Mask",
      Year: "1985",
      imdbID: "tt0089560",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTVlYjExOWEtZmU5Yy00N2VjLWJmY2UtZjZiYzMzYzhhYjNiXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
    },
  ]);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
