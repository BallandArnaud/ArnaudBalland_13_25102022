import { BASE_API_URL } from './index'

export default class AuthService {
  constructor(apiUrl = BASE_API_URL) {
    this.apiUrl = apiUrl
  }

  async loginUser(login, password) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: login,
          password: password,
        }),
      }

      const userConnexion = await fetch(
        this.apiUrl + 'user/login',
        requestOptions
      )
        .then((response) => {
          console.log({ response })
          if (!response.ok) {
            throw new Error('Login failed')
          }
          return response.json()
        })
        .then((data) => data.body)

      return userConnexion.token
    } catch (error) {
      console.log(error)
      return Promise.reject("Server error : can't login")
    }
  }
}
