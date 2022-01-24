import { getRepository, Like, Not, Repository } from 'typeorm'
import { ITypeMunicipeDTO } from '../../../dto/typeMunicipe'
import { ITypeMunicipe  } from '../../../ItypeMunicipe/typeMunicipe'
import { TypeMunicipes } from '../entities/typeMunicipe'

export class TypeMunicipeRepository implements ITypeMunicipe{
    
    private typeMunicipes:Repository<TypeMunicipes>

    constructor(
       
    ){
        this.typeMunicipes=getRepository(TypeMunicipes)
    }

    public async create(data:ITypeMunicipeDTO):Promise<TypeMunicipes>{
        
       const typeMunicipe= this.typeMunicipes.create({...data })
       await this.typeMunicipes.save(typeMunicipe)

       return typeMunicipe
    }
    public async findById(id:string):Promise<TypeMunicipes | undefined>{
        const typeMunicipe=await this.typeMunicipes.findOne({id})

        return typeMunicipe
    }
    public async update(id:string,data:ITypeMunicipeDTO):Promise<void>{
         await this.typeMunicipes.update(id,data)
    }
    public async list(filter:string):Promise<TypeMunicipes[]>{
       
       let typeMunicipe:TypeMunicipes[]=[]
      
       typeMunicipe= await this.typeMunicipes.find()

       return typeMunicipe
    }

    public async save(data:TypeMunicipes):Promise<TypeMunicipes>{
        const typeMunicipe=await this.typeMunicipes.save(data)

        return typeMunicipe
    }
}