import { Navigate } from 'react-router-dom'
import Account from '../../components/Account'
import Greeting from '../../components/Greeting'
import { useSelector } from 'react-redux'
import {
  selectUserFirstName,
  selectUserIsConnected,
  selectUserLastName,
} from '../../app/selectors'
import './index.css'

function User() {
  const userFirstName = useSelector(selectUserFirstName())
  const userLastName = useSelector(selectUserLastName())
  const userIsConnected = useSelector(selectUserIsConnected())

  if (!userIsConnected) {
    return <Navigate to="/login" replace />
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <Greeting firstName={userFirstName} lastName={userLastName} />
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  )
}

export default User
