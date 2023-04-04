import React, { useEffect, useState, useRef } from 'react'
import { CButton } from '@coreui/react'
import axios from 'axios'
import './login.scss'
import Navigation from '../navigation/Navigation'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { auth, login } from 'src/redux/Auth/authActions'
import { showSuccess } from 'src/redux/UI/ui-actions'
import { success } from 'src/redux/Notifications/notificationActions'
import { toast } from 'react-hot-toast'

function Login() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const isAuth = useSelector((state) => state.auth.isAuth)
  //const [isAuth, setIsAuth] = useState(auth);
  const dispatch = useDispatch()
  const [formState, setformState] = useState({})

  const handleChange = (event) => {
    setformState({
      ...formState,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    dispatch(login(formState))
    setLoading(false)
    navigate('/')
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
            <form method="POST" onSubmit={(e) => handleSubmit(e)}>
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
                  value={formState.password}
                  name="password"
                  required
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
              {(!formState?.email || !formState?.password) && (
                <CButton type="submit" color="info" shape="rounded-0">
                  Login
                </CButton>
              )}

              {formState?.email && formState?.password && (
                <CButton type="submit" disable={loading}>
                  Login
                </CButton>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
