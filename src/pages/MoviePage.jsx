import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewAddForm";
import ReviewsList from "../components/ReviewsList";

export default function MoviePage() {
  const { id } = useParams();
  const [movies, setMovies] = useState({});
  const moviesUrl = import.meta.env.VITE_BOOKS_API_URL + "/movies/" + id;

  const fetchMovies = () => {
    axios.get(moviesUrl).then((res) => {
      console.log(res.data);
      const dataMovies = res.data.movie;
      setMovies(dataMovies);
    });
  };

  useEffect(fetchMovies, []);
  return (
    <>
      <div className="container m-2">Dettaglio film</div>
      <section>
        <div className="container m-3">
          <h3>Titolo:</h3>
          {movies.title}
        </div>
        <div className="container m-3">
          {movies.img && <img src={movies.img} alt={movies.title} />}
        </div>

        <div className="container m-3">
          <strong>Direttore:</strong>
          {movies.director}
        </div>
        <div className="container m-3">
          <strong>Genere:</strong>
          {movies.genre}
        </div>
        {/* <div>
        <strong>Voto:</strong>
        {movies.review.vote}
      </div> */}
      </section>

      <section className="container m-3">
        <ReviewsList />
      </section>
      <section className="container m-3">
        <h3>Form delle recensioni</h3>

        <ReviewForm />
      </section>
    </>
  );
}
