import { INeibarroadDTO } from '../../dto/neibarroad';
import { INaibarroad } from '../INaibarroad'
import { Naibarroad } from '../../infra/typeorm/entities/naibarraod'

export class IFakeNaibarroadRepository implements INaibarroad{
    listNaibarroad:any=[]
    public async create(data:INeibarroadDTO):Promise<Naibarroad>{
        const naibarroad=new Naibarroad()
        Object.assign(naibarroad,{...data})
        this.listNaibarroad.push(naibarroad)
        return naibarroad
    }
    public async findById(id:string):Promise<Naibarroad | undefined>{
       const naibarroad=this.listNaibarroad.find((item:any)=>item.id==id)
       return naibarroad
    }
    public async update(id:string,data:INeibarroadDTO):Promise<void>{
        const index=this.listNaibarroad.findIndex((item:any)=>item.id==id)
        this.listNaibarroad[index]=data
        return this.listNaibarroad[index]
    }
    public async list():Promise<Naibarroad[]>{
        return this.listNaibarroad
    }
    public async save(data:Naibarroad):Promise<Naibarroad>{

        this.listNaibarroad.push(data)
        
        return data
      }
}