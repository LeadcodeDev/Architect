import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Categories extends BaseSchema {
	protected tableName = 'categories'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id')
			table.string('label').notNullable()
			table.dateTime('created_at').notNullable()
			table.dateTime('updated_at').notNullable()
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
