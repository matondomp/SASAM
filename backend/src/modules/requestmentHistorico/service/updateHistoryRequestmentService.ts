import { inject,injectable } from 'tsyringe'
import { IHistoryRequestement } from '../Irequestment/IHistoryRequestment'
import { IrequestmentDTO } from '../dto/historico'
import { historyRequestment } from '../infra/typeorm/entities/historyRequestment'


@injectable()
export class UpdateHistoryRequestmentService{
    
      constructor(
            @inject("HisoryRequestmentRepository")
             private requestment:IHistoryRequestement
            ){}

            public async execute(id:string,data:IrequestmentDTO):Promise<historyRequestment>{
        
                  const item= await this.requestment.findById(id)
                  if(!item){
                      throw new Error("This history does not exist!")
                  }
                  item.description=data.description
                  item.user_id=data.user_id
                  item.description=data.description
                  item.solicitacao_id=data.solicitacao_id
                  item.estado_id=data.estado_id
                  await this.requestment.save(item)
            
                return item
             }
             
}