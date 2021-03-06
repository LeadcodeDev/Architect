import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'

/*
import Permissions from 'App/Models/Permissions'
*/
export default class Users extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public email: string

	@column()
	public password: string

	@column()
	public firstname: string

	@column()
	public lastname: string

	@column()
	public address: string

	@column()
	public postalcode: string

	@column()
	public city: string

	@column()
	public tokenConfirmed: string

	@column()
	public isConfirmed: boolean

	@column()
	public rememberMeToken?: string

	@column()
	public permission: String

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime

	@beforeSave()
	public static async hashPassword(users: Users) {
		if (users.$dirty.password) {
			users.password = await Hash.make(users.password)
		}
	}
}
