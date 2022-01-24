import { IdentityDTO } from '../../dto/identity';
import { IIdentity } from '../identity'
import { Identity } from '../../infra/typeorm/entities/identity'

export class IFakeIdentityRepository implements IIdentity{
    listIdentity:any=[]
    public async create(data:IdentityDTO):Promise<Identity>{
        const Identitys=new Identity()
        Object.assign(Identitys,{...data})
        this.listIdentity.push(Identitys)
        return Identitys
    }
    public async findById(id:string):Promise<Identity | undefined>{
       const Identity=this.listIdentity.find((item:any)=>item.id==id)
       return Identity
    }
    public async update(id:string,data:IdentityDTO):Promise<void>{
        const index=this.listIdentity.findIndex((item:any)=>item.id==id)
        this.listIdentity[index]=data
        return this.listIdentity[index]
    }
    public async list():Promise<Identity[]>{
        return this.listIdentity
    }

    public async save(data:Identity):Promise<Identity>{

        this.listIdentity.push(data)
        
        return data
      }
}