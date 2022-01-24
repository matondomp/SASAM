import { IProvinceDTO } from '../../dto/IPrivince';
import { Iprovince } from '../IProvince'
import { Province } from '../../infra/typeorm/entities/Province'

export class IFakeProvinceRepository implements Iprovince{
    listProvince:any=[]
    public async create(data:IProvinceDTO):Promise<Province>{
        const province=new Province()
        Object.assign(province,{...data})
        this.listProvince.push(province)
        return province
    }
    public async findById(id:string):Promise<Province | undefined>{
       const province=this.listProvince.find((item:any)=>item.id==id)
       return province
    }
    public async update(id:string,data:IProvinceDTO):Promise<void>{
        const index=this.listProvince.findIndex((item:any)=>item.id==id)
        this.listProvince[index]=data
        return this.listProvince[index]
    }
    public async list():Promise<Province[]>{
        return this.listProvince
    }

    public async save(data:Province):Promise<Province>{

        this.listProvince.push(data)
        
        return data
      }
}