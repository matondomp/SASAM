import { getRepository, Like, Not, Repository } from 'typeorm'
import { IgenderDTO } from '../../../dto/gender'
import { IGender  } from '../../../Igender/gender'
import { Gender } from '../entities/gender'

export class GenderRepository implements IGender{
    
    private gender:Repository<Gender>
    constructor(
       
    ){
        this.gender=getRepository(Gender)
    }

    public async create(data:IgenderDTO):Promise<Gender>{
        
       const gender= this.gender.create({...data })
       await this.gender.save(gender)

       return gender
    }
    public async findById(id:string):Promise<Gender | undefined>{
        const gender=await this.gender.findOne({id})

        return gender
    }
    public async update(id:string,data:IgenderDTO):Promise<void>{
         await this.gender.update(id,data)
    }
    public async list(filter:string):Promise<Gender[]>{
       console.log(filter)
       let gender:Gender[]=[]
     

       gender= await this.gender.find()

       return gender
    }

    public async save(data:Gender):Promise<Gender>{
        const gender=await this.gender.save(data)

        return gender
    }
}