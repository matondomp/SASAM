import { getRepository, Repository } from 'typeorm'
import { IProvinceDTO } from '../../../dto/IPrivince'
import { Iprovince  } from '../../../Iprovince/IProvince'
import { Province } from '../entities/Province'

export class provinceRepository implements Iprovince{
    
    private province:Repository<Province>
    constructor(
       
    ){
        this.province=getRepository(Province)
    }

    public async create(data:IProvinceDTO):Promise<Province>{
        
       const provinces= this.province.create({...data })
       await this.province.save(provinces)

       return provinces
    }
    public async findById(id:string):Promise<Province | undefined>{

        const provinces=await this.province.findOne({id})
        return provinces
    }
    public async update(id:string,data:IProvinceDTO):Promise<void>{
         await this.province.update(id,data)
    }
    public async list():Promise<Province[]>{
       const province= await this.province.find()
       return province
    }

    public async save(data:Province):Promise<Province>{
     
        const province=await this.province.save(data)

        return province
    }
}