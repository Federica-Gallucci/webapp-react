export default function ReviewsCard({ review }) {
  if (!review) return <></>;

  return (
    <section>
      <div className="container my-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Voto</th>
              <th scope="col">Testo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{review.name[0]}</th>
              <td>{review.name}</td>
              <td>{review.vote}</td>
              <td>{review.text}</td>
            </tr>
          </tbody>
        </table>

        {/* <div>{review.name[0]}</div>
        <div>{review.name}</div>
        <div>{review.vote}</div>
        <div>{review.text}</div> */}
      </div>
    </section>
  );
}
