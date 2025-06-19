import { Link } from "react-router-dom";

export default function Card({ movie }) {
  return (
    <div className="card  m-4">
      <div className="card-body  ">
        <div className="card-title">
          <strong>Titolo:</strong>
          <h5>{movie.title}</h5>
          <img className="img-fluid" src={movie.img} alt={movie.title} />
        </div>

        <div className="card-text">
          <div>
            <strong>Abstract:</strong>
            {movie.abstract}
          </div>
          <div>
            <strong>Genere:</strong>
            {movie.genre}
          </div>

          <Link to={`/movies/${movie.id}`} className="btn btn-primary">
            See more
          </Link>
        </div>
      </div>
    </div>
  );
}
