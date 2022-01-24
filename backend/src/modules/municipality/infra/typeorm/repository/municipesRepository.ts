import { getRepository, Repository } from 'typeorm'
import { ImunicipeDTO } from '../../../dto/municipality'
import { Imunicipio  } from '../../../Imunicipe/IMunicipes'
import { Municipio } from '../entities/municipes'

export class MunicipioRepository implements Imunicipio{
    
    private municipes:Repository<Municipio>
    constructor(
       
    ){
        this.municipes=getRepository(Municipio)
    }

    public async create(data:ImunicipeDTO):Promise<Municipio>{
        
       const municipe= this.municipes.create({...data })
       await this.municipes.save(municipe)

       return municipe
    }
    public async findById(id:string):Promise<Municipio | undefined>{
        const municipe=await this.municipes.findOne({id})

        return municipe
    }
    public async update(id:string,data:ImunicipeDTO):Promise<void>{
         await this.municipes.update(id,data)
    }
    public async list():Promise<Municipio[]>{
       const municipes= await this.municipes.find({
            relations: ["provincia"],
            order: {
                created_at: "DESC",
            }
       })
       return municipes
    }
    public async save(data:Municipio):Promise<Municipio>{
     
        const municipio=await this.municipes.save(data)

        return municipio
    }
}