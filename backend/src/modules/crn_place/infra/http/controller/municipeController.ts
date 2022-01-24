import { container } from 'tsyringe'
import { Request,Response } from 'express'
import { MunicipeRepository } from '../../typeorm/repository/municipesRepository'

import { CreateMunicipesService } from '../../../service/createMunicipesService'
import { UpdateMunicipeService } from '../../../service/updateMunicipeService'

export class MunicipeController{

  public async index(request:Request,response:Response):Promise<Response>{
    const repository=new MunicipeRepository()
    const getMunicipe= await repository.list()
    return response.json(getMunicipe)
  }
   
    public async create(request:Request,response:Response):Promise<Response>{
    
      const { 
        name,
        estado_id,
        pai,
        mae,
        residencia, 
        date,
        email,
        telefone, 
        bairro_id, 
        user_id, 
        tipo_municipe, 
        genero_id, 
        estado_cil_id
       } = request.body
       
       console.log(request.body)
      const createMunicipe= container.resolve(CreateMunicipesService)
     
      const municipe=await createMunicipe.execute({
        name,
        estado_id,
        pai,
        mae,
        residencia, 
        data_nascimento:date,
        email,
        telefone, 
        bairro_id, 
        user_id, 
        tipo_municipe_id:tipo_municipe, 
        genero_id, 
        estado_cil_id
      })

      return response.json(municipe)
    }

    public async update(request:Request,response:Response):Promise<Response>{
    
      const { 
        name,
        estado_id,
        pai,
        mae,
        residencia, 
        date,
        email,
        telefone, 
        bairro_id, 
        user_id, 
        tipo_municipe, 
        genero_id, 
        estado_cil_id
       } = request.body
       
        console.log("body",request.body)
      const UpdateMunicipe= container.resolve(UpdateMunicipeService)
       const { id }=request.params
     
      const Municipe=await UpdateMunicipe.execute(id,{
        name,
        estado_id,
        pai,
        mae,
        residencia, 
        data_nascimento:date,
        email,
        telefone, 
        bairro_id, 
        user_id, 
        tipo_municipe_id:tipo_municipe, 
        genero_id, 
        estado_cil_id
      })

      return response.json(Municipe)
    }
}