import { BASE_API_URL } from './index'

export default class UserService {
  constructor(apiUrl = BASE_API_URL) {
    this.apiUrl = apiUrl
  }
  async getUserProfile(token) {
    const requestGetUserProfile = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }

    const getUserProfile = await fetch(
      this.apiUrl + 'user/profile',
      requestGetUserProfile
    )
      .then((response) => response.json())
      .then((data) => data.body)
      .catch((error) => error)

    console.log('User profile :', getUserProfile)
    return getUserProfile
  }

  async updateUserProfile(token, firstName, lastName) {
    const requestUpdateUserProfile = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    }
    const updateUserProfile = await fetch(
      this.apiUrl + 'user/profile',
      requestUpdateUserProfile
    )
      .then((response) => response.json())
      .then((data) => data.body)
      .catch((error) => error)

    console.log('User profile updated :', updateUserProfile)
    return updateUserProfile
  }
}
