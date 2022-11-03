import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../assets/argentBankLogo.png'
import './index.css'
import { logout } from '../../features/userSlice'
import { selectUserIsConnected, selectUserFirstName } from '../../app/selectors'

function Header() {
  const userIsConnected = useSelector(selectUserIsConnected())
  const userFirstName = useSelector(selectUserFirstName())
  const dispatch = useDispatch()

  return (
    <header>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            src={logo}
            alt="Argent Bank Logo"
            className="main-nav-logo-image"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          {userIsConnected ? (
            <>
              <NavLink to="/profile" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                {userFirstName}
              </NavLink>
              <NavLink
                to="/"
                className="main-nav-item"
                onClick={() => dispatch(logout())}
              >
                <i className="fa fa-sign-out"></i>
                Sign Out
              </NavLink>
            </>
          ) : (
            <NavLink to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
