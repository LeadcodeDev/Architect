import StoreValidator from 'App/Validators/discounts/StoreValidator'
import UpdateValidator from 'App/Validators/discounts/UpdateValidator'
import Discount from 'App/Models/Discount'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CategoriesController {
	public async index() {
		return Discount.all()
	}

	public async show({ params }) {
		return Discount.find(params.id)
	}

	public async store({ request }: HttpContextContract) {
		const { label } = await request.validate(StoreValidator)
		await Discount.create({ label })
	}

	public async update({ params, request }: HttpContextContract) {
		const datas = await request.validate(UpdateValidator)
		await Discount.query().where('id', params.id).update(datas)
		return {
			message: 'La catégorie a été modifié avec succès',
			type: 'success'
		}
	}

	public async destroy({ params }: HttpContextContract) {
		const discount = await Discount.findOrFail(params.id)
		await discount.delete()
		if (discount?.$isDeleted) {
			return {
				message: "L'utilisateur a été supprimé avec succès",
				type: 'success'
			}
		}
	}
}
