import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Permissions extends BaseModel {

    @column({ isPrimary: true })
    public id: number

    @column()
    public action: string

    @column()
    public label: string

}