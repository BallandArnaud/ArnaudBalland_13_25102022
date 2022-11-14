import { createSlice } from '@reduxjs/toolkit'
import AuthService from '../services/AuthService'
import UserService from '../services/UserService'

export function triggerLogin(login, password, rememberMe) {
  return async (dispatch) => {
    try {
      const authService = new AuthService()
      const token = await authService.loginUser(login, password)
      dispatch(
        loginSuccess({
          token: token,
          rememberMe: rememberMe,
        })
      )
      const userService = new UserService()
      const userInformations = await userService.getUserProfile(token)
      dispatch(setProfile(userInformations))
    } catch (error) {
      dispatch(loginFailure(error))
    }
  }
}

export function triggerUpdateProfile(firstName, lastName) {
  return async (dispatch, getState) => {
    const token = getState().userData.token
    console.log('TriggerUpdateProfile get token : ', token)
    const userService = new UserService()
    const newUserInformations = await userService.updateUserProfile(
      token,
      firstName,
      lastName
    )
    console.log('new user infos', newUserInformations)
    const userInformations = {
      firstName: firstName,
      lastName: lastName,
    }
    dispatch(setProfile(userInformations))
  }
}

const initialState = () => {
  return {
    firstName: null,
    lastName: null,
    token: null,
    error: null,
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState(),
  reducers: {
    setProfile: (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },
    loginSuccess: (state, action) => {
      state.token = action.payload.token
      state.error = null
      if (action.payload.rememberMe) {
        localStorage.setItem('token', state.token)
      }
    },
    loginFailure: (state, action) => {
      state.error = action.payload
    },
    logout: (state, action) => {
      localStorage.clear()
      return initialState()
    },
  },
})

export const { setProfile, loginSuccess, loginFailure, logout } =
  userSlice.actions
export default userSlice.reducer
