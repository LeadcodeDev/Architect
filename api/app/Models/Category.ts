import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from 'App/Models/Category'

export default class Category extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public label: string

	@hasMany(() => Product, {
		foreignKey: 'categoryId'
	})
	public products: HasMany<typeof Product>

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}
