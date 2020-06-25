import StoreValidator from 'App/Validators/categories/StoreValidator'
import UpdateValidator from 'App/Validators/categories/UpdateValidator'
import Category from 'App/Models/Category'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CategoriesController {
	public async index() {
		return Category.all()
	}

	public async show({ params }) {
		return Category.find(params.id)
	}

	public async store({ request }: HttpContextContract) {
		const { label } = await request.validate(StoreValidator)
		await Category.create({ label })
	}

	public async update({ params, request }: HttpContextContract) {
		const datas = await request.validate(UpdateValidator)
		await Category.query().where('id', params.id).update(datas)
		return {
			message: 'La catégorie a été modifié avec succès',
			type: 'success'
		}
	}

	public async destroy({ params }: HttpContextContract) {
		const category = await Category.findOrFail(params.id)
		await category.delete()
		if (category?.$isDeleted) {
			return {
				message: "L'utilisateur a été supprimé avec succès",
				type: 'success'
			}
		}
	}
}
