import { IperfilDTO  } from '../../dto/IperfilDTO';
import { IPerfils } from '../Iperfil'
import { Perfil } from '../../infra/typeorm/entities/perfil'

export class IFakePerfilRepository implements IPerfils{
    listPerfil:any=[]
    public async create(data:IperfilDTO):Promise<Perfil>{
        const perfil=new Perfil()
        Object.assign(perfil,{...data})
        this.listPerfil.push(perfil)
        return perfil
    }
    public async findById(id:string):Promise<Perfil | undefined>{
       const perfil=this.listPerfil.find((item:any)=>item.id==id)
       return perfil
    }
    public async update(id:string,data:IperfilDTO):Promise<void>{
        const index=this.listPerfil.findIndex((item:any)=>item.id==id)
        this.listPerfil[index]=data
        return this.listPerfil[index]
    }
    public async list():Promise<Perfil[]>{
        return this.listPerfil
    }

    public async save(data:Perfil):Promise<Perfil>{

        this.listPerfil.push(data)
        
        return data
      }
}