import { getRepository, Repository } from 'typeorm'
import { ImunicipeDTO } from '../../../dto/ICrmPlace'
import { Imunicipe  } from '../../../Imunicipe/IMunicipes'
import { Municipe } from '../../typeorm/entities/municipes'

export class MunicipeRepository implements Imunicipe{
    
    private municipes:Repository<Municipe>
    constructor(
       
    ){
        this.municipes=getRepository(Municipe)
    }

    public async create(data:ImunicipeDTO):Promise<Municipe>{
        
       const municipe= this.municipes.create({...data, data_nascimento:data.data_nascimento })
       await this.municipes.save(municipe)

       return municipe
    }
    public async findById(id:string):Promise<Municipe | undefined>{
        const municipe=await this.municipes.findOne({id})

        return municipe
    }
    public async update(id:string,data:ImunicipeDTO):Promise<void>{
         await this.municipes.update(id,data)
    }
    public async list():Promise<Municipe[]>{
       const municipes= await this.municipes.find({
           relations:[
               'bairro',
               'tipeMunicipio',
               'estadoCivil',
            ]
       })
       return municipes
    }


    public async save(data:Municipe):Promise<Municipe>{
        const municipes=await this.municipes.save(data)

        return municipes
    }
}