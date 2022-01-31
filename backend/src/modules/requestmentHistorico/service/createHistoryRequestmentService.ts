import { inject,injectable } from 'tsyringe'
import { IHistoryRequestement } from '../Irequestment/IHistoryRequestment'
import { IrequestmentDTO } from '../dto/historico'
import { historyRequestment } from '../infra/typeorm/entities/historyRequestment'


@injectable()
export class CreateHistoryRequestmentService{
    
      constructor(
            @inject("HisoryRequestmentRepository")
             private requestment:IHistoryRequestement
            ){}

     public async execute(data:IrequestmentDTO):Promise<historyRequestment>{
           
          const item= await this.requestment.create(data)
          if(!item){
              throw new Error("it should not create solicitação")
          }

         return item
      }
}