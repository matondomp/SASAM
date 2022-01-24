import { IgenderDTO } from '../../dto/gender';
import { IGender } from '../gender'
import { Gender } from '../../infra/typeorm/entities/gender'

export class IFakeGenderRepository implements IGender{
    listGender:any=[]
    public async create(data:IgenderDTO):Promise<Gender>{
        const gender=new Gender()
        Object.assign(gender,{...data})
        this.listGender.push(gender)
        return gender
    }
    public async findById(id:string):Promise<Gender | undefined>{
       const gender=this.listGender.find((item:any)=>item.id==id)
       return gender
    }
    public async update(id:string,data:IgenderDTO):Promise<void>{
        const index=this.listGender.findIndex((item:any)=>item.id==id)
        this.listGender[index]=data
        return this.listGender[index]
    }
    public async list():Promise<Gender[]>{
        return this.listGender
    }

    public async save(data:Gender):Promise<Gender>{

        this.listGender.push(data)
        
        return data
      }
}