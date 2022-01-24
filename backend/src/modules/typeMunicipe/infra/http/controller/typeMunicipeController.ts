import { container } from 'tsyringe'
import { Request,Response } from 'express'
import { TypeMunicipeRepository } from '../../typeorm/repository/typeMunicipeRepository'

import { CreateTypeMinicipeService } from '../../../service/createTypeMunicipeService'
import { UpdateTypeMunicipeService } from '../../../service/updateTypeMunicipeService'

interface IFilter{
   filter:string
}

export class TypeMunicipeController{

  public async index(request:Request,response:Response):Promise<Response>{
    const { filter }=request.body
    console.log("state",filter)
    const repository=new TypeMunicipeRepository()
    const getDistrit= await repository.list(filter)
    return response.json(getDistrit)
  }
   
    public async create(request:Request,response:Response):Promise<Response>{
    
      const { 
          name,
          estado_id
       } = request.body
       
      const create= container.resolve(CreateTypeMinicipeService)
     
      const typeMunicipe=await create.execute({
        name,
        estado_id
      })

      return response.json(typeMunicipe)
    }

    public async update(request:Request,response:Response){
      const { id }=request.params
      const { name,estado_id } =request.body
      
      const updateService=container.resolve(UpdateTypeMunicipeService)
      const state=await updateService.execute(id,{name,estado_id})

      return response.json(state)
    }
}