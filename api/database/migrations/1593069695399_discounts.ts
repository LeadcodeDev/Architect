import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Discounts extends BaseSchema {
	protected tableName = 'discounts'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id')
			table.string('label').notNullable()
			table.integer('price').notNullable()
			table.string('unit')
			table.integer('limitUsage').unsigned()
			table.dateTime('expiration').notNullable()
			table.dateTime('created_at').notNullable()
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
