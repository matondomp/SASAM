import { container } from 'tsyringe'
import { Request,Response } from 'express'
import { IdentityRepository } from '../../typeorm/repository/identityRepository'

import { CreateIdentityService } from '../../../service/createIdentityService'
import { UpdateIdentityService } from '../../../service/updateIdentityService'

interface IFilter{
   filter:string
}

export class IdentityController{


  public async index(request:Request,response:Response):Promise<Response>{
    const { filter }=request.body
    const { id }=request.params
    const repository=new IdentityRepository()
    const getDistrit= await repository.list(id)
    return response.json(getDistrit)
  }
   public async show(request:Request,response:Response):Promise<Response>{

     const { filter }=request.body
     const repository=new IdentityRepository()
     const getDistrit= await repository.listByIdentity(filter)

     return response.json(getDistrit)

   }
    public async create(request:Request,response:Response):Promise<Response>{
    
      const { 
          name,
          tipo_identificacao,
          municipe_id,
          estado_id,
          data_emissao,
          data_validade,
          numero_identificacao,
          user_id,
       } = request.body
      
      const create= container.resolve(CreateIdentityService)
     
      const identity=await create.execute({
        tipo_identificacao,
         data_emissao,
         data_validade,
         numero_identificacao,
         user_id,
         municipe_id,
         estado_id
      })

      return response.json(identity)
    }

    public async update(request:Request,response:Response){
      const { id }=request.params
      const { 
        tipo_identificacao,
        estado_id,
        data_emissao,
        data_validade,
        numero_identificacao,
     } = request.body
     
      const updateService=container.resolve(UpdateIdentityService)
      const identity=await updateService.execute(id,{
        tipo_identificacao,
        data_emissao,
        data_validade,
        numero_identificacao,
        estado_id
      })

      return response.json(identity)
    }
}