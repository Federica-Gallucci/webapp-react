import { Link } from "react-router-dom";

export default function Card({ movies }) {
  return (
    <div className="card m-4">
      {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
      <div className="card-body">
        <div className="card-title">
          <strong>Titolo:</strong>
          <h5>{movies.title}</h5>
        </div>
        <div>
          <strong>Genere:</strong>
          {movies.genre}
        </div>
        <div className="card-text">
          <div>
            <strong>Abstract:</strong>
            {movies.abstract}
          </div>
          {/* <div>
            <strong>Voto:</strong>
            {vote.abstract}
          </div> */}
        </div>
        {/* 
        <Link to={link} className="btn btn-primary">
          {linkText ?? "See more"}
        </Link> */}
        <div className="btn btn-secondary">See more</div>
      </div>
    </div>
  );
}
