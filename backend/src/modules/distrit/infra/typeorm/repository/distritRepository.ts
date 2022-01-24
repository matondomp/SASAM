import { getRepository, Like, Not, Repository } from 'typeorm'
import { IdistritDTO } from '../../../dto/Idistrit'
import { IDistrit  } from '../../../Idistrit/IDistrit'
import { Distrit } from '../entities/distrit'

export class DistritRepository implements IDistrit{
    
    private distrits:Repository<Distrit>
    constructor(
       
    ){
        this.distrits=getRepository(Distrit)
    }

    public async create(data:IdistritDTO):Promise<Distrit>{
        
       const distrit= this.distrits.create({...data })
       await this.distrits.save(distrit)

       return distrit
    }
    public async findById(id:string):Promise<Distrit | undefined>{
        const distrit=await this.distrits.findOne({id})

        return distrit
    }
    public async update(id:string,data:IdistritDTO):Promise<void>{
         await this.distrits.update(id,data)
    }
    public async list(filter:string):Promise<Distrit[]>{
       
       const distrits= await this.distrits.find({
            relations: [ "municipio","provincia"],
            order: {
                created_at: "DESC",
            },
           
       })

       return distrits
    }

    public async save(data:Distrit):Promise<Distrit>{
     
        const distrit=await this.distrits.save(data)

        return distrit
    }
}