import { IPriorityDTO } from '../../dto/IPriority';
import { Irequestement } from '../Irequestment'
import { Priority } from '../../infra/typeorm/entities/priority'

export class IFakeRequestmentRepository implements Irequestement{
    listPeriority:any=[]
    public async create(data:IPriorityDTO):Promise<Priority>{
        const periority=new Priority()
        Object.assign(periority,{...data})
        this.listPeriority.push(periority)
        return periority
    }
    public async findById(id:string):Promise<Priority | undefined>{
       const periority=this.listPeriority.find((item:any)=>item.id==id)
       return periority
    }
    public async update(id:string,data:Priority):Promise<void>{
        const index=this.listPeriority.findIndex((item:any)=>item.id==id)
        this.listPeriority[index]=data
        return this.listPeriority[index]
    }
    public async list():Promise<Priority[]>{
        return this.listPeriority
    }

    public async save(data:Priority):Promise<Priority>{

        this.listPeriority.push(data)
        
        return data
      }
}