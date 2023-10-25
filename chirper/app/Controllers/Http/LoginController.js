'use strict'

const User = use('App/Models/User')

class LoginController {
    loginView({ request, response, view}) {
        return view.render('auth.login')
    }


    async postLogin({ request, auth, session, response}) {
        await auth.attempt(request.input('email'), request.input('password'))
        return response.route('index')
    }

    async logout ({ params, auth, request, response }) {
        await auth.logout()
        return response.route('/')
    }
}

module.exports = LoginController
