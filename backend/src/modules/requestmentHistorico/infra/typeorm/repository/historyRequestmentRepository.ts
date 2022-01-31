import { getRepository, Like, Not, Repository } from 'typeorm'
import { IrequestmentDTO } from '../../../dto/historico'
import { IHistoryRequestement  } from '../../../Irequestment/IHistoryRequestment'
import { historyRequestment } from '../entities/historyRequestment'

export class HistoryRequestmentRepository implements IHistoryRequestement{
    
    private requestment:Repository<historyRequestment>
    constructor(
       
    ){
        this.requestment=getRepository(historyRequestment)
    }

    public async create(data:IrequestmentDTO):Promise<historyRequestment>{
        
       const requestments= this.requestment.create({...data })
       await this.requestment.save(requestments)

       return requestments
    }
    public async findById(id:string):Promise<historyRequestment | undefined>{
        const requestments=await this.requestment.findOne({id})

        return requestments
    }
    public async update(id:string,data:IrequestmentDTO):Promise<void>{
         await this.requestment.update(id,data)
    }
    public async list(id:string):Promise<historyRequestment[]>{
        let requestments:historyRequestment[]=[]
      
       requestments= await this.requestment.find({
           relations:[
               'Solicitacoes',
               'Users',
               'Estado'
            ],
            where:{ solicitacao_id:id}
       })

       return requestments
    }

    public async save(data:historyRequestment):Promise<historyRequestment>{
        const requestment=await this.requestment.save(data)

        return requestment
    }
}