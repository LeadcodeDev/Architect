import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Permissions extends BaseSchema {
  protected tableName = 'permissions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('action').notNullable()
      table.string("label").notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
