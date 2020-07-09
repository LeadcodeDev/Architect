import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users'
import StoreValidator from 'App/Validators/users/StoreValidator'
import UpdateValidator from 'App/Validators/users/UpdateValidator'
import Mail from 'App/Services/Mailer'
import RandomString from 'randomstring'
import Env from '@ioc:Adonis/Core/Env'

export default class UsersController {
	public async index() {
		return Users.all()
	}

	public async show({ params }: HttpContextContract) {
		return await Users.query().where('id', params.id)
	}

	public async store({ response, request }: HttpContextContract) {
		try {
			const { firstname, lastname, email, password, address, postalcode, city } = await request.validate(StoreValidator)
			const user = await Users.create({ firstname, lastname, email, password, address, postalcode, city, tokenConfirmed: RandomString.generate() })
			if (user.$isPersisted) {
				await Mail({
					from: Env.get('MAILER_USER'),
					to: email,
					subject: 'Confirmation de votre adresse email',
					html: `<a href="http://localhost:3000/authentication/confirmation_email/${user.tokenConfirmed}">Click pour confirmer votre adresse email</a>`
				})
				return { message: 'Le compte a bien été créé', code: 200 }
			}
		} catch (error) {
			return response.send(error.messages)
		}
	}

	public async confirmAccount({ request }) {
		await Users.query().where('token_confirmed', request.input('token')).update({ is_confirmed: true, token_confirmed: '' })
	}

	public async update({ params, request }: HttpContextContract) {
		const datas = await request.validate(UpdateValidator)
		await Users.query().where('id', params.id).update(datas)
		return {
			message: "L'utilisateur a été modifié avec succès",
			type: 'success'
		}
	}

	public async destroy({ params }: HttpContextContract) {
		const user = await Users.findOrFail(params.id)
		await user.delete()
		if (user?.$isDeleted) {
			return {
				message: "L'utilisateur a été supprimé avec succès",
				type: 'success'
			}
		}
	}
}
