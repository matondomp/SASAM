import { getRepository, Like, Not, Repository } from 'typeorm'
import { IPriorityDTO } from '../../../dto/IPriority'
import { Ipriority  } from '../../../Ipriority/Ipriority'
import { Priority } from '../entities/priority'

export class PriorityRepository implements Ipriority{
    
    private priority:Repository<Priority>
    constructor(
       
    ){
        this.priority=getRepository(Priority)
    }

    public async create(data:IPriorityDTO):Promise<Priority>{

        console.log(data)
       const requestments= this.priority.create({...data })
       await this.priority.save(requestments)

       return requestments
    }
    public async findById(id:string):Promise<Priority | undefined>{
        const priority=await this.priority.findOne({id})

        return priority
    }
    public async update(id:string,data:IPriorityDTO):Promise<void>{
         await this.priority.update(id,data)
    }
    public async list(filter:string):Promise<Priority[]>{
        let priority:Priority[]=[]
      
       if(filter){
     
        priority= await this.priority.find({
               description:Like(`%${filter}%`),
               slug:Like(`%${filter}%`)
           })
           return priority
       }

       priority= await this.priority.find()

       return priority
    }

    public async save(data:Priority):Promise<Priority>{
        const priority=await this.priority.save(data)

        return priority
    }
}