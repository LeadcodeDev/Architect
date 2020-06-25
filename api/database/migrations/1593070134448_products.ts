import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
	protected tableName = 'products'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id')
			table.string('label').notNullable()
			table.string('body').notNullable()
			table.string('caracteristics').notNullable()
			table.integer('stock').notNullable()
			table.integer('price').notNullable()
			table.boolean('is_visible').defaultTo(false)
			table.dateTime('created_at').notNullable()
			table.dateTime('updated_at').notNullable()
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
