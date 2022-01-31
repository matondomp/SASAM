import { inject,injectable } from 'tsyringe'
import { Irequestement } from '../Irequestment/Irequestment'
import { IrequestmentDTO } from '../dto/Irequestment'
import { Requestment } from '../infra/typeorm/entities/requestment'


@injectable()
export class UpdateRequestmentService{
    
      constructor(
            @inject("RequestmentRepository")
             private requestment:Irequestement
            ){}

            public async execute(id:string,data:IrequestmentDTO):Promise<Requestment>{
        
                  const item= await this.requestment.findById(id)
                  if(!item){
                      throw new Error("This state does not exist!")
                  }
                  item.name=data.name
                  item.numero_identificacao=data.numero_identificacao
                  item.telefone=data.telefone
                  item.tipo_solicitacao_id=data.tipo_solicitacao_id
                  item.estado_id=data.estado_id
                  await this.requestment.save(item)
            
                return item
             }
             
}