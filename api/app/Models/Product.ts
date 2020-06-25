import ProductsPictures from 'App/Models/ProductsPicture'
import Category from 'App/Models/Category'
import Discount from 'App/Models/Discount'
import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public label: string

	@column()
	public body: string

	@column()
	public caracteristics: string

	@column()
	public stock: number

	@column()
	public price: number

	@column()
	public discountId: number

	@belongsTo(() => Discount)
	public discount: BelongsTo<typeof Discount>

	@column()
	public categoryId: number

	@belongsTo(() => Category)
	public categorie: BelongsTo<typeof Category>

	@hasMany(() => ProductsPictures)
	public pictures: HasMany<typeof ProductsPictures>

	@column()
	public isVisible: boolean

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}
