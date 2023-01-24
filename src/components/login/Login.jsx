import React, { useState } from "react";
import Button from "../Button";

import "./login.scss";
import Navigation from "../navigation/Navigation";
import { Link } from "react-router-dom";

function Login() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue({ value: event.target.value });
  };
  return (
<div className="App">
  <div className="App-container">
      <Navigation />
      <div className="Login">
        <div className="Login__guides">
          <h1 className="heading"> Olympic Hotel </h1>
          <p>Customer management system</p>
          <p>Hotel resources management </p>
          <p>E-booking system</p>
        </div>
        <div className="Login__form">
          <form>
            <h1 className="form__heading"> Login </h1>
            <div className="Form__row block">
              <input
                type="text"
                name="email"
                id="email"
                className="form__control"
                placeholder="joe@olympichotel.rw"
              />
            </div>
            <div className="Form__row block">
              <input
                type="password"
                value={value.pasword}
                name="password"
                id="password"
                className="form__control"
                placeholder="*********"
                onChange={handleChange}
              />
            </div>
            <div className="Form__row block">
              <Link className="login__reset__option" to="/reset" exact={true} activeClassName="active">Reset password</Link>

              </div>
             
            <div className="Form__row block">
              <Button btnText="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
</div>

  );
}

export default Login;
