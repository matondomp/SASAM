import { inject,injectable } from 'tsyringe'
import { Permission } from '../infra/typeorm/entities/permission'
import { IpermissionDTO } from '../dto/IpermissionDTO'
import { IPermission } from '../Ipermission/Ipermission'


@injectable()
export class UpdatePermissionRepositoryService{
    
      constructor(
            @inject("PermissionRepository")
             private permissionRepository:IPermission
            ){}

     public async execute(id:string,data:IpermissionDTO):Promise<Permission>{
          
           const item= await this.permissionRepository.findById(id)
           if(!item){
               throw new Error("This perfil does not exist!")
           }
           item.nome=data.nome
           item.description=data.nome
           item.flag=data.nome
                         .replace(/\s/g,'')
                         .toUpperCase()

           await this.permissionRepository.save(item)

         return item
      }
}

