import { ImunicipeDTO } from '../../dto/municipality';
import { Imunicipio } from '../IMunicipes'
import { Municipio } from '../../infra/typeorm/entities/municipes'

export class IFakeMunicipeRepository implements Imunicipio{
    listMunicipe:any=[]
    public async create(data:ImunicipeDTO):Promise<Municipio>{
        const municipes=new Municipio()
        Object.assign(municipes,{...data})
        this.listMunicipe.push(municipes)
        return municipes
    }
    public async findById(id:string):Promise<Municipio | undefined>{
       const municipe=this.listMunicipe.find((item:any)=>item.id==id)
       return municipe
    }
    public async update(id:string,data:ImunicipeDTO):Promise<void>{
        const index=this.listMunicipe.findIndex((item:any)=>item.id==id)
        this.listMunicipe[index]=data
        return this.listMunicipe[index]
    }
    public async list():Promise<Municipio[]>{
        return this.listMunicipe
    }

    public async save(data:Municipio):Promise<Municipio>{

        this.listMunicipe.push(data)
        
        return data
      }
}