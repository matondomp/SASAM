import { IrequestmentDTO } from '../../dto/Irequestment';
import { TypeIrequestement } from '../Irequestment'
import { TypeRequestment } from '../../infra/typeorm/entities/requestment'

export class IFakeRequestmentRepository implements TypeIrequestement{
    listRequestment:any=[]
    public async create(data:IrequestmentDTO):Promise<TypeRequestment>{
        const requestment=new TypeRequestment()
        Object.assign(requestment,{...data})
        this.listRequestment.push(requestment)
        return requestment
    }
    public async findById(id:string):Promise<TypeRequestment | undefined>{
       const requestment=this.listRequestment.find((item:any)=>item.id==id)
       return requestment
    }
    public async update(id:string,data:IrequestmentDTO):Promise<void>{
        const index=this.listRequestment.findIndex((item:any)=>item.id==id)
        this.listRequestment[index]=data
        return this.listRequestment[index]
    }
    public async list():Promise<TypeRequestment[]>{
        return this.listRequestment
    }

    public async save(data:TypeRequestment):Promise<TypeRequestment>{

        this.listRequestment.push(data)
        
        return data
      }
}