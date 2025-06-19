import ReviewsCard from "./ReviewCard";

export default function ReviewsList() {
  const reviews = [
    {
      id: 4,
      movie_id: 2,
      name: "Diana",
      vote: 5,
      text: "The best crime movie ever made.",
    },
    {
      id: 4,
      movie_id: 2,
      name: "Diana",
      vote: 5,
      text: "The best crime movie ever made.",
    },
  ];
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
