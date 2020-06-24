import { BaseModel, column, manyToMany, ManyToMany } from "@ioc:Adonis/Lucid/Orm"
import Permissions from "App/Models/Permissions"

export default class Roles extends BaseModel {

    @column({ isPrimary: true })
    public id: number

    @column()
    public display: string

    @manyToMany(() => Permissions)
    public permissions: ManyToMany<typeof Permissions>

}