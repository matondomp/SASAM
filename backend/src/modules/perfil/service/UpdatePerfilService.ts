import { inject,injectable } from 'tsyringe'
import { Perfil } from '../infra/typeorm/entities/perfil'
import { IperfilDTO } from '../dto/IperfilDTO'
import { IPerfils } from '../Iperfil/Iperfil'


@injectable()
export class UpdatePerfilRepositoryService{
    
      constructor(
            @inject("PerfilRepository")
             private perfilRepository:IPerfils
            ){}

     public async execute(id:string,data:IperfilDTO):Promise<Perfil>{
           console.log(data)
           const item= await this.perfilRepository.findById(id)
           if(!item){
               throw new Error("This perfil does not exist!")
           }
           item.nome=data.nome
           item.estado_id=data.estado_id
           await this.perfilRepository.save(item)

         return item
      }
}

