import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserFirstName, selectUserLastName } from '../../app/selectors'
import { triggerUpdateProfile } from '../../features/userSlice'
import './index.css'

function EditingProfileForm({ setIsEditing }) {
  const dispatch = useDispatch()
  const userFirstName = useSelector(selectUserFirstName())
  const userLastName = useSelector(selectUserLastName())
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

  return (
    <form className="editing-profile-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          ref={inputFirstName}
          defaultValue={userFirstName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          id="lastName"
          ref={inputLastName}
          defaultValue={userLastName}
        />
      </div>
      <button className="btn btn-modify" type="submit">
        Modify
      </button>
      <button className="btn btn-cancel" onClick={() => setIsEditing(false)}>
        Cancel
      </button>
    </form>
  )
}

export default EditingProfileForm
