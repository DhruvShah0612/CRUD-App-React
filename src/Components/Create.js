import React from "react";
import { useState } from "react";
import axios from "axios";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://669e1e889a1bda36800573da.mockapi.io/CRUD", {
      e_name: name,
      e_age: age,
      e_email: email,
    });
  };

  return (
    <>
      <div className="row container d-flex align-items-center justify-content-center">
        <div className="col-md-4">
          <div className="bg-primary p-2 text-center">
            <h1>create app</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>enter name:</label>
              <input
                type="text"
                placeholder="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>enter age:</label>
              <input
                type="number"
                placeholder="age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>enter email:</label>
              <input
                type="email"
                placeholder="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid">
              <input type="submit" value="submit" className="btn btn-primary" />
            </div>
          </form>

          {/* {name}
          <br />
          {age}
          <br />
          {email} */}
        </div>
      </div>
    </>
  );
}

export default Create;
