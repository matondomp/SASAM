import { IdistritDTO } from '../../dto/Idistrit';
import { IDistrit } from '../IDistrit'
import { Distrit } from '../../infra/typeorm/entities/distrit'

export class IFakeDistritRepository implements IDistrit{
    listDistrit:any=[]
    public async create(data:IdistritDTO):Promise<Distrit>{
        const distrits=new Distrit()
        Object.assign(distrits,{...data})
        this.listDistrit.push(distrits)
        return distrits
    }
    public async findById(id:string):Promise<Distrit | undefined>{
       const distrit=this.listDistrit.find((item:any)=>item.id==id)
       return distrit
    }
    public async update(id:string,data:IdistritDTO):Promise<void>{
        const index=this.listDistrit.findIndex((item:any)=>item.id==id)
        this.listDistrit[index]=data
        return this.listDistrit[index]
    }
    public async list():Promise<Distrit[]>{
        return this.listDistrit
    }
    
    public async save(data:Distrit):Promise<Distrit>{

        this.listDistrit.push(data)
        
        return data
      }
}