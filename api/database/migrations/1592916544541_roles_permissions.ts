import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RolesPermissions extends BaseSchema {
  protected tableName = 'roles_permissions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer("roles_id").unsigned().references("id").inTable("roles")
      table.integer('permissions_id').unsigned().references("id").inTable("permissions")
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
