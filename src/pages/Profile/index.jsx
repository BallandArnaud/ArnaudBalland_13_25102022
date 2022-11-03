import Account from '../../components/Account'
import Greeting from '../../components/Greeting'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserFirstName, selectUserLastName } from '../../app/selectors'
import { useState, useRef } from 'react'
import './index.css'
import { triggerUpdateProfile } from '../../features/userSlice'

function Profile() {
  const dispatch = useDispatch()
  const userFirstName = useSelector(selectUserFirstName())
  const userLastName = useSelector(selectUserLastName())
  const [isEditing, setIsEditing] = useState(false)
  const inputFirstName = useRef()
  const inputLastName = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('formulaire edit envoyé')
    console.log('Nouveau firstName', inputFirstName.current.value)
    console.log('Nouveau lastName', inputLastName.current.value)
    dispatch(
      triggerUpdateProfile(
        inputFirstName.current.value,
        inputLastName.current.value
      )
    )
    setIsEditing(false)
  }

  const displayEditForm = (e) => {
    e.preventDefault()
    setIsEditing(true)
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <Greeting firstName={userFirstName} lastName={userLastName} />
        <button className="edit-button" onClick={(e) => displayEditForm(e)}>
          Edit Name
        </button>
        {isEditing ? (
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="firstName">Username</label>
            <input
              type="text"
              id="firstName"
              ref={inputFirstName}
              defaultValue={userFirstName}
            />
            <label htmlFor="lastName">Username</label>
            <input
              type="text"
              id="lastName"
              ref={inputLastName}
              defaultValue={userLastName}
            />
            <button type="submit">Modify</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        ) : null}
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

export default Profile
