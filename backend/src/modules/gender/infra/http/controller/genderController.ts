import { container } from 'tsyringe'
import { Request,Response } from 'express'
import { GenderRepository } from '../../typeorm/repository/genderRepository'

import { CreateGenderService } from '../../../service/createGenderService'
import { UpdateStateService } from '../../../service/updateGenderService'

interface IFilter{
   filter:string
}

export class GenderController{

  public async index(request:Request,response:Response):Promise<Response>{
    const { filter }=request.body
    console.log("state",filter)
    const repository=new GenderRepository()
    const getDistrit= await repository.list(filter)
    return response.json(getDistrit)
  }
   
    public async create(request:Request,response:Response):Promise<Response>{
    
      const { 
          name,
          estado_id
       } = request.body
       
      const create= container.resolve(CreateGenderService)
     
      const data=await create.execute({
        name,
        estado_id
      })

      return response.json(data)
    }

    public async update(request:Request,response:Response){
      const { id }=request.params
      const { name,estado_id } =request.body
      
      const updateService=container.resolve(UpdateStateService)
      const data=await updateService.execute(id,{name,estado_id})

      return response.json(data)
    }
}