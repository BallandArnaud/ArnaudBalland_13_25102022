import { createSlice } from '@reduxjs/toolkit'
import AuthService from '../services/AuthService'
import UserService from '../services/UserService'

export function triggerLogin(login, password) {
  return async (dispatch) => {
    const authService = new AuthService()
    const token = await authService.loginUser(login, password)
    dispatch(userLogin(token))
    const userService = new UserService()
    const userInformations = await userService.getUserProfile(token)
    dispatch(setUserProfile(userInformations))
  }
}

const initialState = () => {
  return {
    firstName: null,
    lastName: null,
    token: null,
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState(),
  reducers: {
    setUserProfile: (state, action) => {
      console.log(action.payload)
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },
    userLogin: (state, action) => {
      state.token = action.payload
    },
    userLogout: (state, action) => {
      return initialState()
    },
  },
})

export const { setUserProfile, userLogin, userLogout } = userSlice.actions
export default userSlice.reducer
