import { IrequestmentDTO } from '../../dto/Irequestment';
import { Irequestement } from '../Irequestment'
import { Requestment } from '../../infra/typeorm/entities/requestment'

export class IFakeRequestmentRepository implements Irequestement{
    listRequestment:any=[]
    public async create(data:IrequestmentDTO):Promise<Requestment>{
        const requestment=new Requestment()
        Object.assign(requestment,{...data})
        this.listRequestment.push(requestment)
        return requestment
    }
    public async findById(id:string):Promise<Requestment | undefined>{
       const requestment=this.listRequestment.find((item:any)=>item.id==id)
       return requestment
    }
    public async update(id:string,data:IrequestmentDTO):Promise<void>{
        const index=this.listRequestment.findIndex((item:any)=>item.id==id)
        this.listRequestment[index]=data
        return this.listRequestment[index]
    }
    public async list():Promise<Requestment[]>{
        return this.listRequestment
    }

    public async save(data:Requestment):Promise<Requestment>{

        this.listRequestment.push(data)
        
        return data
      }
}