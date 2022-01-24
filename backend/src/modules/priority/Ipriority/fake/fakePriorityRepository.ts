import { IPriorityDTO } from '../../dto/IPriority';
import { Ipriority } from '../Ipriority'
import { Priority } from '../../infra/typeorm/entities/priority'

export class IFakePriorityRepository implements Ipriority
{
    listPriority:any=[]
    public async create(data:IPriorityDTO):Promise<Priority>{
        const priority=new Priority()
        Object.assign(priority,{...data})
        this.listPriority.push(priority)
        return priority
    }
    public async findById(id:string):Promise<Priority | undefined>{
       const priority=this.listPriority.find((item:any)=>item.id==id)
       return priority
    }
    public async update(id:string,data:IPriorityDTO):Promise<void>{
        const index=this.listPriority.findIndex((item:any)=>item.id==id)
        this.listPriority[index]=data
        return this.listPriority[index]
    }
    public async list():Promise<Priority[]>{
        return this.listPriority
    }

    public async save(data:Priority):Promise<Priority>{

        this.listPriority.push(data)
        
        return data
      }
}