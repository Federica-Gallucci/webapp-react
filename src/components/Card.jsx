import { Link } from "react-router-dom";

export default function Card({ title, abstract, link, vote, linkText }) {
  return (
    <div className="card m-4">
      {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{abstract}</p>
        <p>{vote}</p>

        <Link to={link} className="btn btn-primary">
          {linkText ?? "See more"}
        </Link>
      </div>
    </div>
  );
}
