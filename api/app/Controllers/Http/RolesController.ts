import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Roles from 'App/Models/Roles'

export default class RolesController {

    public async show({ params }: HttpContextContract) {

        const roles = await Roles.query()
            .where('id', params.id)
            .preload('permissions')
            .first()
        
        return roles?.serialize()

    }

}