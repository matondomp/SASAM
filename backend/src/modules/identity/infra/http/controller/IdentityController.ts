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
   
    public async create(request:Request,response:Response):Promise<Response>{
    
      const { 
          name,
          municipe_id,
          estado_id
       } = request.body
       
      const create= container.resolve(CreateIdentityService)
     
      const identity=await create.execute({
        name,
        municipe_id,
        estado_id
      })

      return response.json(identity)
    }

    public async update(request:Request,response:Response){
      const { id }=request.params
      const { name,estado_id,municipe_id } =request.body
      
      const updateService=container.resolve(UpdateIdentityService)
      const identity=await updateService.execute(id,{name,estado_id,municipe_id})

      return response.json(identity)
    }
}