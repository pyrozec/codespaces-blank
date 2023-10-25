'use strict'

const User = use('App/Models/User')

class RegisterController {

    registrationView({ request, response, view}) {
        return view.render('auth.register')
    }

    async postRegister({ request, session, response }) {
        const user = await User.create({
            username: request.input('name'),
            email: request.input('email'),
            password: request.input('password')
        })
        session.flash({ successmessage: 'User have been created successfully'})
        return response.route('login.create');
    }
}

module.exports = RegisterController
