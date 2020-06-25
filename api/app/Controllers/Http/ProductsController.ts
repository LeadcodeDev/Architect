import StoreValidator from 'App/Validators/products/StoreValidator'
import UpdateValidator from 'App/Validators/products/UpdateValidator'
import Product from 'App/Models/Product'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CategoriesController {
	public async index() {
		return Product.all()
	}

	public async show({ params }) {
		return Product.query().where('id', params.id).preload('discount').preload('categorie').preload('pictures')
	}

	public async store({ request }: HttpContextContract) {
		const { label, body, caracteristics, stock, price, categoryId, discountId, isVisible } = await request.validate(StoreValidator)

		await Product.create({ label, body, caracteristics, stock, price, categoryId, discountId, isVisible })
	}

	public async update({ params, request }: HttpContextContract) {
		const datas = await request.validate(UpdateValidator)
		await Product.query().where('id', params.id).update(datas)
		return {
			message: 'Le produit a été modifié avec succès',
			type: 'success'
		}
	}

	public async destroy({ params }: HttpContextContract) {
		const product = await Product.findOrFail(params.id)
		await product.delete()
		if (product?.$isDeleted) {
			return {
				message: 'Le produit a été supprimé avec succès',
				type: 'success'
			}
		}
	}
}
