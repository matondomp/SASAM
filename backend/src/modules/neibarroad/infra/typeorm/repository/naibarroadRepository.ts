import { getRepository, Repository } from 'typeorm'
import { INeibarroadDTO } from '../../../dto/neibarroad'
import { INaibarroad  } from '../../../Inaibarroad/INaibarroad'
import { Naibarroad } from '../entities/naibarraod'

export class NaibarroadRepository implements INaibarroad{
    
    private naibarroad:Repository<Naibarroad>
    constructor(
       
    ){
        this.naibarroad=getRepository(Naibarroad)
    }

    public async create(data:INeibarroadDTO):Promise<Naibarroad>{
        
       const municipe= this.naibarroad.create({...data })
       await this.naibarroad.save(municipe)

       return municipe
    }
    public async findById(id:string):Promise<Naibarroad | undefined>{
        const municipe=await this.naibarroad.findOne({id})

        return municipe
    }
    public async update(id:string,data:INeibarroadDTO):Promise<void>{
        console.log(data,id)
         await this.naibarroad.update(id,data)
    }
    public async list():Promise<Naibarroad[]>{
       const naibarroad= await this.naibarroad.find({
       
                relations: ["distrito", "municipio","provincia"],
                order: {
                    created_at: "DESC",
                },
      
       })
       return naibarroad
    }
    public async save(data:Naibarroad):Promise<Naibarroad>{
        console.log("save",data)
        const naibarroad=await this.naibarroad.save(data)

        return naibarroad
    }
}