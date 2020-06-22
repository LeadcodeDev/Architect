import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
	protected tableName = 'users'

	public async up() {
		this.schema.table(this.tableName, (table) => {
			table.boolean('is_confirmed').defaultTo(false)
			table.string('token_confirmed')
		})
	}

	public async down() {
		this.schema.table(this.tableName, (table) => {
			table.dropColumn('is_confirmed')
			table.dropColumn('token_confirmed')
		})
	}
}
