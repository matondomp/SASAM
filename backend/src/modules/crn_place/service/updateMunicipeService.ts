import { inject,injectable } from 'tsyringe'
import { Imunicipe } from '../Imunicipe/IMunicipes'
import { ImunicipeDTO } from '../dto/ICrmPlace'
import { Municipe } from '../infra/typeorm/entities/municipes'



@injectable()
export class UpdateMunicipeService{
    
      constructor(
            @inject("MunicipeRepository")
             private municipe:Imunicipe
            ){}

     public async execute(id:string,data:ImunicipeDTO):Promise<Municipe>{
           
         const item= await this.municipe.findById(id)
          if(!item){
              throw new Error("it do not found  municipe")
          }
          item.name=data.name
          item.data_nascimento=data.data_nascimento
          item.email=data.email
          item.estado_cil_id=data.estado_cil_id
          item.estado_id=item.estado_id
          
          item.genero_id=data.genero_id
          item.mae=data.mae
          item.pai=data.pai
          item.residencia=data.residencia
          item.telefone=data.telefone
          item.tipo_municipe_id=data.tipo_municipe_id
          item.user_id=data.user_id
          item.bairro_id=data.bairro_id
        
          await this.municipe.save(item)
         return item
      }
}