import { IdentityDTO } from '../dto/identity'
import { Identity } from '../infra/typeorm/entities/identity'

export interface IIdentity{
    create(date:IdentityDTO):Promise<Identity>
    findById(id:string):Promise<Identity | undefined>
    update(id:string,date:IdentityDTO):Promise<void>
    list(filter:string):Promise<Identity[]>
    save(data:Identity):Promise<Identity>
}