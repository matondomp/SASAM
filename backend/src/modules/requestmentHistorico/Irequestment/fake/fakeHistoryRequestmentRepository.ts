import { IrequestmentDTO } from '../../dto/historico';
import { IHistoryRequestement } from '../IHistoryRequestment'
import { historyRequestment } from '../../infra/typeorm/entities/historyRequestment'

export class IFakeRequestmentRepository implements IHistoryRequestement{
    listRequestment:any=[]
    public async create(data:IrequestmentDTO):Promise<historyRequestment>{
        const requestment=new historyRequestment()
        Object.assign(requestment,{...data})
        this.listRequestment.push(historyRequestment)
        return requestment
    }
    public async findById(id:string):Promise<historyRequestment | undefined>{
       const requestment=this.listRequestment.find((item:any)=>item.id==id)
       return requestment
    }
    public async update(id:string,data:IrequestmentDTO):Promise<void>{
        const index=this.listRequestment.findIndex((item:any)=>item.id==id)
        this.listRequestment[index]=data
        return this.listRequestment[index]
    }
    public async list():Promise<historyRequestment[]>{
        return this.listRequestment
    }

    public async save(data:historyRequestment):Promise<historyRequestment>{

        this.listRequestment.push(data)
        
        return data
      }
}