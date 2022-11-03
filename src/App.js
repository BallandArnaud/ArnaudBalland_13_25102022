import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Error from './pages/Error'
import Footer from './components/Footer'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
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
