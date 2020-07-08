import Users from 'App/Models/Users'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
	public async login({ auth, request }: HttpContextContract) {
		const email = request.input('email')
		const password = request.input('password')
		const rememberUser = !!request.input('remember_me')

		const testUser = await Users.findBy('email', email)
		await auth.attempt(email, password, rememberUser)
		if (auth.user) {
			if (testUser?.isConfirmed) {
				return auth.user
			} else {
				auth.logout()
				return { message: 'Veuillez confirmer votre email', error: 403 }
			}
		}
	}

	public async logout({ auth }: HttpContextContract) {
		await auth.logout()
		return {
			message: 'Utilisateur déconnecté',
			type: 'success'
		}
	}

	public async isLogin({ auth }: HttpContextContract) {
		return await auth.authenticate()
	}
}
