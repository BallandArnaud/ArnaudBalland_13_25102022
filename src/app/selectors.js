export const selectUserIsConnected = () => {
  return (state) => state.userData.token !== null
}

export const selectUserFirstName = () => {
  return (state) => state.userData.firstName
}

export const selectUserLastName = () => {
  return (state) => state.userData.lastName
}
