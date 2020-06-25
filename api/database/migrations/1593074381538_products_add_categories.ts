import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
	protected tableName = 'products'

	public async up() {
		this.schema.table(this.tableName, (table) => {
			table.integer('category_id').unsigned().references('id').inTable('categories')
			table.integer('discount_id').unsigned().references('id').inTable('discounts')
		})
	}

	public async down() {
		this.schema.table(this.tableName, (table) => {
			table.dropColumn('category_id')
			table.dropColumn('discount_id')
		})
	}
}
