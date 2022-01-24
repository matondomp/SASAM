import { ITypeMunicipeDTO } from '../../dto/typeMunicipe';
import { ITypeMunicipe } from '../typeMunicipe'
import { TypeMunicipes } from '../../infra/typeorm/entities/typeMunicipe'

export class IFakeTypeMunicipeRepository implements ITypeMunicipe{
    listTypeMunicipes:any=[]
    public async create(data:ITypeMunicipeDTO):Promise<TypeMunicipes>{
        const typeMunicipes=new TypeMunicipes()
        Object.assign(typeMunicipes,{...data})
        this.listTypeMunicipes.push(typeMunicipes)
        return typeMunicipes
    }
    public async findById(id:string):Promise<TypeMunicipes | undefined>{
       const typeMunicipes=this.listTypeMunicipes.find((item:any)=>item.id==id)
       return typeMunicipes
    }
    public async update(id:string,data:ITypeMunicipeDTO):Promise<void>{
        const index=this.listTypeMunicipes.findIndex((item:any)=>item.id==id)
        this.listTypeMunicipes[index]=data
        return this.listTypeMunicipes[index]
    }
    public async list():Promise<TypeMunicipes[]>{
        return this.listTypeMunicipes
    }

    public async save(data:TypeMunicipes):Promise<TypeMunicipes>{

        this.listTypeMunicipes.push(data)
        
        return data
      }
}