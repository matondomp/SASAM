import { getRepository, Like, Not, Repository } from 'typeorm'
import { IdentityDTO } from '../../../dto/identity'
import { IIdentity  } from '../../../Iidentity/identity'
import { Identity } from '../entities/identity'

export class IdentityRepository implements IIdentity{
    
    private identity:Repository<Identity>
    constructor(
       
    ){
        this.identity=getRepository(Identity)
    }

    public async create(data:IdentityDTO):Promise<Identity>{
        
       const identity= this.identity.create({...data })
       await this.identity.save(identity)

       return identity
    }
    public async findById(id:string):Promise<Identity | undefined>{
        const identity=await this.identity.findOne({id})

        return identity
    }
    public async update(id:string,data:IdentityDTO):Promise<void>{
        
         await this.identity.update(id,data)
    }
    public async list(id:string):Promise<Identity[]>{
       console.log(id)
       let identity:Identity[]=[]
     

       identity= await this.identity.find({
           relations:['Municipe','User'],
           where:{municipe_id:id},
           order: {
            created_at: "DESC",
        },
       })

       return identity
    }

    public async save(data:Identity):Promise<Identity>{
        console.log('updated==>',data)
        const identity=await this.identity.save(data)

        return identity
    }
}