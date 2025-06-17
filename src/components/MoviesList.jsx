import Card from "./Card";

export default function MoviesList() {
  return (
    <>
      <div className="container">
        <div className="row g-3 "></div>
        <div className="col-4">
          <Card
            title={"titolo"}
            abstract={"estratto"}
            link={"/movies/1"}
          ></Card>
        </div>
        <div className="col-4">
          <Card
            title={"titolo"}
            abstract={"estratto"}
            link={"/movies/2"}
          ></Card>
        </div>
        <div className="col-4">
          <Card
            title={"titolo"}
            abstract={"estratto"}
            link={"/movies/3"}
          ></Card>
        </div>
      </div>
    </>
  );
}
