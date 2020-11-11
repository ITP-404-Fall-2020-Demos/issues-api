'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request, auth }) {
    const { email, password } = request.all()

    const user = new User()
    user.email = email
    user.username = email
    user.password = password
    await user.save()
    await auth.login(user)

    return user
  }

  async show({ auth, response }) {
    try {
      await auth.check()
      return auth.user
    } catch (error) {
      return response.status(404).send()
    }
  }

  async login({ auth, request, response }) {
    const { email, password } = request.all()

    try {
      await auth.attempt(email, password)
      return auth.user
    } catch (error) {
      response.status(401).send() // Unauthorized
    }
  }

  async logout({ auth }) {
    await auth.logout()
  }
}

module.exports = UserController
