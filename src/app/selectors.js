export const selectUserIsConnected = () => {
  return (state) => state.userData.token !== null
}

export const selectUserToken = () => {
  return (state) => state.userData.token
}

export const selectUserFirstName = () => {
  return (state) => state.userData.firstName
}

export const selectUserLastName = () => {
  return (state) => state.userData.lastName
}

export const selectUserError = () => {
  return (state) => state.userData.error
}
