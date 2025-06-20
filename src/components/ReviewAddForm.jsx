import { useState } from "react";

const formInitialData = {
  name: "",
  vote: 0,
  text: "",
};

export default function ReviewForm({ idMovie }) {
  const [formData, setFormData] = useState(formInitialData);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form inviato");
  };
  return (
    <section>
      <div>
        <h2>Aggiungi la tua recensione</h2>
        <form className="row" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input type="hidden" value={idMovie} name="id_movie" />
          </div>
          <div className="form-group my-5 ">
            <div className="col-4">
              <label htmlFor="name">Nome</label>

              <input
                value={formData.name}
                onChange={handleInputChange}
                type="text"
                name="name"
                className="form-control"
                id="movie_id"
              />
            </div>

            <div className="col-4">
              <label htmlFor="text">Testo</label>
              <input
                value={formData.text}
                onChange={handleInputChange}
                type="text"
                name="text"
                className="form-control"
                id="text"
              />
            </div>

            <div className="col-4">
              <label htmlFor="vote">Voto</label>
              <input
                value={formData.vote}
                onChange={handleInputChange}
                type="number"
                className="form-control"
                id="vote"
                name="vote"
                min="1"
                max="10"
                step="1"
              />
            </div>

            {/* <div className="col-4">
            <textarea   
            name="text"
  id="text"
  className="form-control"
  onChange={handleInputChange}
  value={formData.text}
  rows="5"




              </textarea> */}
            </div>

            <div className="my-5">checkbox per termini e condizioni</div>

            <div className="col-12 my-5">
              <button className="btn btn-success">Invia Recensione</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
