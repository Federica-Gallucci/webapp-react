import { useEffect, useState } from "react";
import ReviewsCard from "./ReviewCard";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ReviewsList() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const movieUrl = import.meta.env.VITE_BOOKS_API_URL + "/movies/" + id;

  const fetchreviews = () => {
    axios(movieUrl).then((res) => {
      console.log(res.data.movie.reviews);
      const dataReviews = res.data.movie.reviews;
      setReviews(dataReviews);
    });
  };

  useEffect(fetchreviews, []);

  // const reviews = [
  //   {
  //     id: 4,
  //     movie_id: 2,
  //     name: "Diana",
  //     vote: 5,
  //     text: "The best crime movie ever made.",
  //   },
  //   {
  //     id: 4,
  //     movie_id: 2,
  //     name: "Diana",
  //     vote: 5,
  //     text: "The best crime movie ever made.",
  //   },
  // ];
  return (
    <section>
      <div className="container my-3">
        <h5>Lista delle recensioni</h5>

        {reviews.map((review) => {
          return <ReviewsCard review={review} />;
        })}
      </div>
    </section>
  );
}
