import { useState } from "react";

const formInitialData = {
  name: "",
  vote: "",
  text: "",
};

export default function ReviewForm({ idMovie }) {
  const { formData, setFormData } = useState(formInitialData);

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
        <h2>La tua recensione</h2>
        <form className="row" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">IdMovie</label>
            {/* <input type="hidden" value={idMovie} name="id_movie" /> */}
          </div>
          <div className="form-group col-4">
            {/* <label for="formGroupExampleInput2">Nome</label>
            <input
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Another input"
            />
            <label for="formGroupExampleInput">Cognome</label>
            <input
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
            />
            <label for="formGroupExampleInput">Testo</label>
            <input
              value={formData.text}
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
            />
            <label for="formGroupExampleInput">Voto</label>
            <input
              value={formData.text}
              onChange={handleInputChange}
              type="number"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
            /> */}
            {/* <textarea
              name="text"
              id="text"
              className="form-control"
              onChange={handleInputChange}
              rows="5"
            >
              {formData.text}
            </textarea> */}
            <div>checkbox per termini e condizioni</div>

            <div className="col-12">
              <button className="btn btn-success">Invia Recensione</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
