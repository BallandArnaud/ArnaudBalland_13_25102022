import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Error from './pages/Error'
import Footer from './components/Footer'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import ProtectedRoutes from './components/ProtectedRoutes'
import { useEffect } from 'react'
import { isTokenExpired } from './utils/jwt'
import { useDispatch } from 'react-redux'
import { loginSuccess, setProfile } from './features/userSlice'
import UserService from './services/UserService'

function App() {
  const dispatch = useDispatch()
  const tokenFromLocalStorage = localStorage.getItem('token')

  useEffect(() => {
    const getUserProfile = async (token) => {
      const userService = new UserService()
      const userInformations = await userService.getUserProfile(token)
      dispatch(setProfile(userInformations))
    }

    if (!isTokenExpired(tokenFromLocalStorage)) {
      dispatch(
        loginSuccess({
          token: tokenFromLocalStorage,
        })
      )
      getUserProfile(tokenFromLocalStorage)
    }
  }, [dispatch, tokenFromLocalStorage])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
