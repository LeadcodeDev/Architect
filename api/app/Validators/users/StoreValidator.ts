import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class StoreValidator {
	constructor(private ctx: HttpContextContract) {}

	public schema = schema.create({
		firstname: schema.string(),
		lastname: schema.string(),
		email: schema.string({ trim: true }, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
		password: schema.string({ trim: true }, [rules.confirmed()]),
		address: schema.string(),
		postalcode: schema.string(),
		city: schema.string()
	})
	public cacheKey = this.ctx.routeKey

	public messages = {
		required: '{{ field }} est obligatoire',
		'firstname.required': 'Le prénom est obligatoire',
		'lastname.required': 'Le nom est obligatoire',

		'email.required': "L'email est obligatoire",
		'email.email': "L'email doit-être une adresse email valide",
		'email.unique': "L'email existe déjà, veuillez en choisir une autre",

		'password_confirmation.confirmed': "Le mot de passe n'a pas été confirmé ou est invalide",

		'address.required': "L'adresse postale est obligatoire",
		'postalcode.required': 'Le code postal est obligatoire',
		'city.required': 'La ville est obligatoire'
	}
}
