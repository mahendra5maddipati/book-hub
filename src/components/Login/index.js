import react, {useState} from 'react'

import './index.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showSubmitError, setShowSubmitError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  return (
    <div className="login-container">
      <img
        src="https://res.cloudinary.com/dq6xf1yud/image/upload/v1744072519/bg1_login_ifgo8p.png"
        className="login-img"
        alt="login"
      />
      <form className="form-container">
        <img
          src="https://res.cloudinary.com/dq6xf1yud/image/upload/v1744073435/logo_d9z1zi.png"
          className="website-logo"
          alt="website logo"
        />
        <div className="input-container">{}</div>
        <div className="input-container">{}</div>
        <button type="submit" className="login-botton">
          Login
        </button>
        {showSubmitError && <p className="error-message">{errorMsg}</p>}
      </form>
    </div>
  )
}
export default Login
