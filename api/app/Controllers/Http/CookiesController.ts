import Cookies from 'App/Models/Cookies'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DateTime } from 'luxon'

export default class CookiesController {
	public async allow({ request }: HttpContextContract) {
		const date = new Date()
		const ip = request.input('ip')
		const expiration = DateTime.fromJSDate(new Date(date.setMonth(date.getMonth() + 6)))
		await Cookies.updateOrCreate({ ip }, { ip, expiration })

		return { message: 'Cookies are allow for user' + ip }
	}

	public async show({ params }: HttpContextContract) {
		const cookie = await Cookies.findBy('ip', params.ip)
		return { cookie }
	}
}
