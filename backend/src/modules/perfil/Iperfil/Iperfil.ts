import { IperfilDTO } from '../dto/IperfilDTO'
import { Perfil } from '../infra/typeorm/entities/perfil'

export interface IPerfils{
    create(date:IperfilDTO):Promise<Perfil>
    findById(id:string):Promise<Perfil | undefined>
    update(id:string,date:IperfilDTO):Promise<void>
    list(filter:string):Promise<Perfil[]>
    save(data:Perfil):Promise<Perfil>
}