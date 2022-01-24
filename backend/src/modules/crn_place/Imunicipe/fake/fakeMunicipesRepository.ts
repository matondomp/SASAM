import { ImunicipeDTO } from '../../dto/ICrmPlace';
import { Imunicipe } from '../IMunicipes'
import { Municipe } from '../../infra/typeorm/entities/municipes'

export class IFakeMunicipeRepository implements Imunicipe{
    listMunicipe:any=[]
    public async create(data:ImunicipeDTO):Promise<Municipe>{
        const municipes=new Municipe()
        Object.assign(municipes,{...data})
        this.listMunicipe.push(municipes)
        return municipes
    }
    public async findById(id:string):Promise<Municipe | undefined>{
       const municipe=this.listMunicipe.find((item:any)=>item.id==id)
       return municipe
    }
    public async update(id:string,data:ImunicipeDTO):Promise<void>{
        const index=this.listMunicipe.findIndex((item:any)=>item.id==id)
        this.listMunicipe[index]=data
        return this.listMunicipe[index]
    }
    public async list():Promise<Municipe[]>{
        return this.listMunicipe
    }
    public async save(data:Municipe):Promise<Municipe>{

        this.listMunicipe.push(data)
        
        return data
      }
}