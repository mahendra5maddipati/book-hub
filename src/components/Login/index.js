import react, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showSubmitError, setShowSubmitError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const history = useHistory()

  const onSubmitSuccess = jwtToken => {
    // const {history} = props
    Cookies.set('jwt_token', jwtToken, {
      expires: 5,
    })
    history.replace('/')
  }

  const onSubmitFailure = msg => {
    setShowSubmitError(true)
    setErrorMsg(msg)
  }

  const submitForm = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  return (
    <div className="login-container">
      <img
        src="https://res.cloudinary.com/dq6xf1yud/image/upload/v1744072519/bg1_login_ifgo8p.png"
        className="login-img"
        alt="login"
      />
      <form className="form-container" onSubmit={submitForm}>
        <img
          src="https://res.cloudinary.com/dq6xf1yud/image/upload/v1744073435/logo_d9z1zi.png"
          className="website-logo"
          alt="website logo"
        />
        <div className="input-container">
          <label className="input-label" htmlFor="username">
            Username*
          </label>
          <input
            type="text"
            id="username"
            className="username-field"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="rahul"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="password">
            Password*
          </label>
          <input
            type="password"
            id="password"
            className="password-field"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="rahul@2021"
          />
        </div>
        {showSubmitError && <p className="error-message">{errorMsg}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  )
}
export default Login
