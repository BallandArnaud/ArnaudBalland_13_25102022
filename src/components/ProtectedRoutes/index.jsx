import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { selectUserIsConnected } from '../../app/selectors'

function ProtectedRoutes() {
  const userIsConnected = useSelector(selectUserIsConnected())
  return userIsConnected ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes
