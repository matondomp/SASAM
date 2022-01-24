import { getRepository, Like, Not, Repository } from 'typeorm'
import { IperfilDTO } from '../../../dto/IperfilDTO'
import { IPerfils  } from '../../../Iperfil/Iperfil'
import { Perfil } from '../entities/perfil'

export class PerfilRepository implements IPerfils{
    
    private perfil:Repository<Perfil>

    constructor(
       
    ){
        this.perfil=getRepository(Perfil)
    }

    public async create(data:IperfilDTO):Promise<Perfil>{
        
       const perfil= this.perfil.create({...data })
       await this.perfil.save(perfil)

       return perfil
    }
    public async findById(id:string):Promise<Perfil | undefined>{
        const perfil=await this.perfil.findOne({id})

        return perfil
    }
    public async update(id:string,data:IperfilDTO):Promise<void>{
         await this.perfil.update(id,data)
    }
    public async list(filter:string):Promise<Perfil[]>{
       
       let perfil:Perfil[]=[]
      
       perfil= await this.perfil.find()

       return perfil
    }

    public async save(data:Perfil):Promise<Perfil>{
        const perfil=await this.perfil.save(data)

        return perfil
    }
}