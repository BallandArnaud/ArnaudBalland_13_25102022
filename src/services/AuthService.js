export default class AuthService {
  async loginUser(login, password) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: login,
        password: password,
      }),
    }

    const userConnexion = await fetch(
      'http://localhost:3001/api/v1/user/login',
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => data.body)
      .catch((error) => error)

    return userConnexion.token
  }
}
