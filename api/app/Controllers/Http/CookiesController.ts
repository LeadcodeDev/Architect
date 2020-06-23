import Cookies from 'App/Models/Cookies'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DateTime } from 'luxon'

export default class CookiesController {
	public async allow({ request }: HttpContextContract) {
		const date = new Date()
		const ip = request.input('ip')
		const expiration = DateTime.fromJSDate(new Date(date.setMonth(date.getMonth() + 6)))

		const searchPayload = { ip }
		const persistancePayload = { ip, expiration }

		await Cookies.updateOrCreate(searchPayload, persistancePayload)
	}
}
