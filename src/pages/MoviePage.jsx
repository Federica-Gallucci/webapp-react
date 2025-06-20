import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewAddForm";
import ReviewsList from "../components/ReviewsList";

export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const movieUrl = import.meta.env.VITE_BOOKS_API_URL + "/movies/" + id;

  const fetchMovie = () => {
    axios.get(movieUrl).then((res) => {
      console.log(res.data);
      const dataMovie = res.data.movie;
      setMovie(dataMovie);
    });
  };

  useEffect(fetchMovie, []);

  const createPathImage = () => {
    const movieImage =
      import.meta.env.VITE_BOOKS_API_URL + "/img/" + movie.image;
    return movieImage;
  };
  return (
    <>
      <div className="container m-2">Dettaglio film</div>
      <section>
        <div className="container m-3">
          <h3>Titolo:</h3>
          {movie.title}
        </div>
        <div className="container m-3">
          <img
            className="card img-fluid"
            src={createPathImage()}
            alt={movie.title}
          />
        </div>

        <div className="container m-3">
          <strong>Direttore:</strong>
          {movie.director}
        </div>
        <div className="container m-3">
          <strong>Genere:</strong>
          {movie.genre}
        </div>
        {/* <div>
          <strong>Voto:</strong>
          {movie.reviews.vote}
        </div> */}
      </section>

      <section className="container m-3">
        <ReviewsList reviews={movie.reviews} />
      </section>
      <section className="container m-3">
        <ReviewForm idMovie={movie.id} />
      </section>
    </>
  );
}
