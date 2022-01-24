import { inject,injectable } from 'tsyringe'
import { Perfil } from '../infra/typeorm/entities/perfil'
import { IperfilDTO } from '../dto/IperfilDTO'
import { IPerfils } from '../Iperfil/Iperfil'


@injectable()
export class CreatePerfilRepositoryService{
    
      constructor(
            @inject("PerfilRepository")
             private perfilRepository:IPerfils
            ){}

     public async execute(data:IperfilDTO):Promise<Perfil>{
           console.log(data)
           const item= await this.perfilRepository.create(data)
           if(!item){
               throw new Error("This perfil does not exist!")
           }

          return item
      }
}

