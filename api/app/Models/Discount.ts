import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from 'App/Models/Product'

export default class Discount extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public label: string

	@column()
	public reduction: number

	@column()
	public unit: string

	@column()
	public limitUsage: number

	@hasMany(() => Product)
	public discount: HasMany<typeof Product>

	@column.dateTime({ autoCreate: true })
	public expiration: DateTime

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime
}
