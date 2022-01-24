import { IpermissionDTO } from '../dto/IpermissionDTO'
import { Permission } from '../infra/typeorm/entities/permission'

export interface IPermission{
    create(date:IpermissionDTO):Promise<Permission>
    findById(id:string):Promise<Permission | undefined>
    update(id:string,date:IpermissionDTO):Promise<void>
    list(filter:string):Promise<Permission[]>
    save(data:Permission):Promise<Permission>
}