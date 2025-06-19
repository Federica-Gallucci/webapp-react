export default function ReviewsCard({ review }) {
  return (
    <section>
      <div className="container my-3">
        <h5>Lista delle recensioni</h5>
      </div>
      <div className="d-flex justify-content-between border-bottom">
        <div>{review.name[0]}</div>
        <div>{review.name}</div>
        <div>{review.vote}</div>
        <div>{review.text}</div>
      </div>
    </section>
  );
}
