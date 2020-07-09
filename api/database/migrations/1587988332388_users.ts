import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
	protected tableName = 'users'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id').primary()
			table.string('email', 255).notNullable()
			table.string('password', 180).notNullable()
			table.string('remember_me_token').nullable()
			table.string('permission').notNullable().defaultTo('ROLE_USER')
			table.string('firstname').notNullable()
			table.string('lastname').notNullable()
			table.string('address').notNullable()
			table.string('postalcode').notNullable()
			table.string('city').notNullable()
			table.dateTime('created_at').notNullable()
			table.dateTime('updated_at').notNullable()
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
