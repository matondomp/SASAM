import { container } from 'tsyringe'
import { Request,Response } from 'express'
import { MunicipioRepository } from '../../typeorm/repository/municipesRepository'

import { CreateMunicipesService } from '../../../service/createMunicipesService'
import { UpdateMunicipioService } from '../../../service/updateMunicipioService'

export class MunicipeController{

  public async index(request:Request,response:Response):Promise<Response>{
    const repository=new MunicipioRepository()
    const getMunicipe= await repository.list()
    return response.json(getMunicipe)
  }
   
    public async create(request:Request,response:Response):Promise<Response>{
    
      const { 
          name,
          estado_id,
          provincia_id
       } = request.body
       
      const createMunicipe= container.resolve(CreateMunicipesService)
     
      const municipe=await createMunicipe.execute({
          name,
          estado_id,
          provincia_id
      })

      return response.json(municipe)
    }


    public async update(request:Request,response:Response):Promise<Response>{
    
      const { 
        name,
        estado_id,
        provincia_id,
       } = request.body
  
      const distrist= container.resolve(UpdateMunicipioService)
       const { id }=request.params
     
      const responseMunicipio=await distrist.execute(id,{
        name,
        estado_id,
        provincia_id,
      })

      return response.json(responseMunicipio)
    }
}