import { getRepository, Like, Not, Repository } from 'typeorm'
import { IpermissionDTO } from '../../../dto/IpermissionDTO'
import { IPermission  } from '../../../Ipermission/Ipermission'
import { Permission } from '../entities/permission'

export class PermissionRepository implements IPermission{
    
    private permission:Repository<Permission>

    constructor(
       
    ){
        this.permission=getRepository(Permission)
    }

    public async create(data:IpermissionDTO):Promise<Permission>{
        
       const perfil= this.permission.create({...data })
       await this.permission.save(perfil)

       return perfil
    }
    public async findById(id:string):Promise<Permission | undefined>{
        const perfil=await this.permission.findOne({id})

        return perfil
    }
    public async update(id:string,data:IpermissionDTO):Promise<void>{
         await this.permission.update(id,data)
    }
    public async list(filter:string):Promise<Permission[]>{
       
       let perfil:Permission[]=[]
      
       perfil= await this.permission.find()

       return perfil
    }

    public async save(data:Permission):Promise<Permission>{
        const perfil=await this.permission.save(data)

        return perfil
    }
}