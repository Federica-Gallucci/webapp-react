import axios from "axios";
import Card from "./Card";
import { useState, useEffect } from "react";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const moviesUrl = import.meta.env.VITE_BOOKS_API_URL + "/movies";

  const fetchmovies = () => {
    axios.get(moviesUrl).then((res) => {
      console.log(res.data);
      const dataMovies = res.data.movies;
      setMovies(dataMovies);
    });
  };

  useEffect(fetchmovies, []);

  return (
    <>
      <div className="container">
        <div className="row  g-3 ">
          <div className=" col-6">
            {movies.map((movie, id) => {
              return <Card key={id} movie={movie}></Card>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
