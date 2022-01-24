import { inject,injectable } from 'tsyringe'
import { Permission } from '../infra/typeorm/entities/permission'
import { IpermissionDTO } from '../dto/IpermissionDTO'
import { IPermission } from '../Ipermission/Ipermission'


@injectable()
export class CreatePermissionRepositoryService{
    
      constructor(
            @inject("PermissionRepository")
             private permissionRepository:IPermission
            ){}

     public async execute(data:IpermissionDTO):Promise<Permission>{
         
           let flag=data.nome.replace(/\s/g,'').toUpperCase()
           const item= await this.permissionRepository.create({...data, flag })
           if(!item){
               throw new Error("This perfil does not exist!")
           }

          return item
      }
}

