export default class UserService {
  async getUserProfile(token) {
    const requestGetUserProfile = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }

    const getUserProfile = await fetch(
      'http://localhost:3001/api/v1/user/profile',
      requestGetUserProfile
    )
      .then((response) => response.json())
      .then((data) => data.body)
      .catch((error) => error)

    console.log('User profile :', getUserProfile)
    return getUserProfile
  }
}
