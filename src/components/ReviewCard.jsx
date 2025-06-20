export default function ReviewsCard({ review }) {
  if (!review) return <></>;

  return (
    <section>
      <div className="container my-3">
        <div className="d-flex justify-content-between border-bottom">
          <div>{review.name[0]}</div>
          <div>{review.name}</div>
          <div>{review.vote}</div>
          <div>{review.text}</div>
        </div>
      </div>
    </section>
  );
}
