import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RolesUsers extends BaseSchema {
  protected tableName = 'roles_users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
        table.integer("users_id").unsigned().references("id").inTable("users")
        table.integer("roles_id").unsigned().references("id").inTable("roles")
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
