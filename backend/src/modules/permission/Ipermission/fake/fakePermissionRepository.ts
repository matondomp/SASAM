import { IpermissionDTO  } from '../../dto/IpermissionDTO';
import { IPermission } from '../Ipermission'
import { Permission } from '../../infra/typeorm/entities/permission'

export class IFakePermissionRepository implements IPermission{
    listPermission:any=[]
    public async create(data:IpermissionDTO):Promise<Permission>{
        const permission=new Permission()
        Object.assign(permission,{...data})
        this.listPermission.push(permission)
        return permission
    }
    public async findById(id:string):Promise<Permission | undefined>{
       const permission=this.listPermission.find((item:any)=>item.id==id)
       return permission
    }
    public async update(id:string,data:IpermissionDTO):Promise<void>{
        const index=this.listPermission.findIndex((item:any)=>item.id==id)
        this.listPermission[index]=data
        return this.listPermission[index]
    }
    public async list():Promise<Permission[]>{
        return this.listPermission
    }

    public async save(data:Permission):Promise<Permission>{

        this.listPermission.push(data)
        
        return data
      }
}