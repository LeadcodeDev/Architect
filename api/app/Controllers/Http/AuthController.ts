import Users from 'App/Models/Users'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
	public async login({ auth, request }: HttpContextContract) {
		const email = request.input('email')
		const password = request.input('password')
		const rememberUser = !!request.input('remember_me')

		const testUser = await Users.findBy('email', email)
		if (testUser?.isConfirmed) {
			await auth.attempt(email, password, rememberUser)
		} else {
			return { message: 'Veuillez confirmer votre email', status: 403 }
		}
		return auth.user
	}

	public async logout({ auth }: HttpContextContract) {
		await auth.logout()
		return {
			message: 'Utilisateur déconnecté',
			type: 'success'
		}
	}
}
