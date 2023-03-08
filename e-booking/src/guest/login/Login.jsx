import React, { useEffect, useState, useReff } from 'react'
import { CButton } from '@coreui/react'

import './login.scss'
import Navigation from '../navigation/Navigation'
import { Link } from 'react-router-dom'

function Login() {
  const [formState, setformState] = useState({})
  const handleChange = (event) => {
    setformState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formState)

    // await axios({})
  }

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
            <form onSubmit={handleSubmit} method="POST">
              <h1 className="form__heading"> Login </h1>
              <div className="Form__row block">
                <input
                  type="text"
                  value={formState.email}
                  name="email"
                  id="email"
                  className="form__control"
                  placeholder="joe@olympichotel.rw"
                  onChange={handleChange}
                />
              </div>
              <div className="Form__row block">
                <input
                  type="password"
                  value={formState.pasword}
                  name="password"
                  id="password"
                  className="form__control"
                  placeholder="*********"
                  onChange={handleChange}
                />
              </div>
              <div className="Form__row block">
                <Link
                  className="login__reset__option"
                  to="/reset"
                  exact={true}
                  activeClassName="active"
                >
                  Reset password
                </Link>
              </div>

              {formState?.email && formState?.pasword && (
                <CButton type="submit" color="info" shape="rounded-0">
                  Login
                </CButton>
              )}

              {(!formState?.email || !formState?.pasword) && (
                <Link to="/">
                  {' '}
                  <CButton type="submit" color="info" shape="rounded-0">
                    Login
                  </CButton>{' '}
                </Link>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
