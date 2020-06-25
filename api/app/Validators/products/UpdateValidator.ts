import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CategoryValidator {
	constructor(private ctx: HttpContextContract) {}

	public schema = schema.create({
		label: schema.string.optional(),
		body: schema.string.optional(),
		caracteristics: schema.string.optional(),
		stock: schema.number.optional(),
		price: schema.number.optional(),
		discount: schema.number.optional([rules.exists({ table: 'discounts', column: 'id' })]),
		pictures: schema.number.optional([rules.exists({ table: 'products_pictures', column: 'id' })]),
		isVisible: schema.boolean.optional()
	})

	/**
	 * The `schema` first gets compiled to a reusable function and then that compiled
	 * function validates the data at runtime.
	 *
	 * Since, compiling the schema is an expensive operation, you must always cache it by
	 * defining a unique cache key. The simplest way is to use the current request route
	 * key, which is a combination of the route pattern and HTTP method.
	 */
	public cacheKey = this.ctx.routeKey

	/**
	 * Custom messages for validation failures. You can make use of dot notation `(.)`
	 * for targeting nested fields and array expressions `(*)` for targeting all
	 * children of an array. For example:
	 *
	 * {
	 *   'profile.username.required': 'Username is required',
	 *   'scores.*.number': 'Define scores as valid numbers'
	 * }
	 */
	public messages = {}
}
