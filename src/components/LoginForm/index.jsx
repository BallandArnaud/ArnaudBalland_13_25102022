import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { triggerLogin } from '../../features/userSlice'
import { selectUserError } from '../../app/selectors'

function LoginForm() {
  const dispatch = useDispatch()
  const userLoginError = useSelector(selectUserError())
  const inputUsername = useRef()
  const inputPassword = useRef()
  const checkboxRemember = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('formulaire envoyé')
    console.log('Checkbox est check ? ', checkboxRemember.current.checked)

    dispatch(
      triggerLogin(inputUsername.current.value, inputPassword.current.value)
    )
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={inputUsername} required />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={inputPassword} required />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" ref={checkboxRemember} />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
      {userLoginError !== null ? (
        <p style={{ color: 'red', marginBottom: 0 }}>
          Error : Username or password
        </p>
      ) : null}
    </form>
  )
}

export default LoginForm
