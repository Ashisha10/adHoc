import "./signUpPage.css";
import React from "react";
import ReactDOM from "react";
import { Link } from "react-router-dom";

export default function MyForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
    <h3>CREATE AN ACCOUNT</h3>
      <label className="form-label">
        Username : <br></br>
        <input type="text" name="username" />
      </label>
      <hr />
      <label type="email" className="form-label">
        Email: <br></br>
        <input name="email" />
      </label>
      <hr />
      <label className="form-label">
        password: <br></br>
        <input type="password" name="password" />
      </label>
      <br></br>
      <br></br>
      <button type="submit">Submit</button>
      <p>Already have an account ?</p>
      <Link to="/login" target="/login">login</Link>
    </form>
  );
}
