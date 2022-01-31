import { inject,injectable } from 'tsyringe'
import { TypeIrequestement } from '../Irequestment/Irequestment'
import { IrequestmentDTO } from '../dto/Irequestment'
import { Requestment } from '../infra/typeorm/entities/requestment'


@injectable()
export class UpdateRequestmentService{
    
      constructor(
            @inject("TypeRequestmentRepository")
             private requestment:TypeIrequestement
            ){}

            public async execute(id:string,data:IrequestmentDTO):Promise<Requestment>{
        
                  const item= await this.requestment.findById(id)
                  if(!item){
                      throw new Error("This state does not exist!")
                  }
                  item.name=data.name
                  //item.sla=data.sla
                  item.estado_id=data.estado_id
                  await this.requestment.save(item)
            
                return item
             }
}