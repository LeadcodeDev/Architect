import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductsPictures extends BaseSchema {
	protected tableName = 'products_pictures'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id')
			table.integer('product_id').unsigned().references('id').inTable('products')
			table.string('filename')
			table.dateTime('created_at').notNullable()
			table.dateTime('updated_at').notNullable()
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
