import { getRepository, Like, Not, Repository } from 'typeorm'
import { IrequestmentDTO } from '../../../dto/Irequestment'
import { Irequestement  } from '../../../Irequestment/Irequestment'
import { Requestment } from '../entities/requestment'

export class RequestmentRepository implements Irequestement{
    
    private requestment:Repository<Requestment>
    constructor(
       
    ){
        this.requestment=getRepository(Requestment)
    }

    public async create(data:IrequestmentDTO):Promise<Requestment>{
        
       const requestments= this.requestment.create({...data })
       await this.requestment.save(requestments)

       return requestments
    }
    public async findById(id:string):Promise<Requestment | undefined>{
        const requestments=await this.requestment.findOne({id})

        return requestments
    }
    public async update(id:string,data:IrequestmentDTO):Promise<void>{
         await this.requestment.update(id,data)
    }
    public async list(filter:string):Promise<Requestment[]>{
        let requestments:Requestment[]=[]
        console.log('filter',filter)
       if(filter){
        console.log('filter1',filter)
            requestments= await this.requestment.find({
               description:Like(`%${filter}%`),
               sla:Like(`%${filter}%`)
           })
           return requestments
       }

       requestments= await this.requestment.find()

       return requestments
    }

    public async save(data:Requestment):Promise<Requestment>{
        const requestment=await this.requestment.save(data)

        return requestment
    }
}