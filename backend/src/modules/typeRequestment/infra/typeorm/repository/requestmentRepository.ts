import { getRepository, Like, Not, Repository } from 'typeorm'
import { IrequestmentDTO } from '../../../dto/Irequestment'
import { TypeIrequestement  } from '../../../Irequestment/Irequestment'
import { TypeRequestment } from '../entities/requestment'

export class TypeRequestmentRepository implements TypeIrequestement{
    
    private requestment:Repository<TypeRequestment>
    constructor(
       
    ){
        this.requestment=getRepository(TypeRequestment)
    }

    public async create(data:IrequestmentDTO):Promise<TypeRequestment>{
        
       const requestments= this.requestment.create({...data })
       await this.requestment.save(requestments)

       return requestments
    }
    public async findById(id:string):Promise<TypeRequestment | undefined>{
        const requestments=await this.requestment.findOne({id})

        return requestments
    }
    public async update(id:string,data:IrequestmentDTO):Promise<void>{
         await this.requestment.update(id,data)
    }
    public async list(filter:string):Promise<TypeRequestment[]>{
        let requestments:TypeRequestment[]=[]
            requestments= await this.requestment.find()
       return requestments
    }

    public async save(data:TypeRequestment):Promise<TypeRequestment>{
        const requestment=await this.requestment.save(data)

        return requestment
    }
}