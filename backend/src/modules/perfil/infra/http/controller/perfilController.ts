import { Request,Response } from 'express'
import { container } from 'tsyringe'

import { PerfilRepository } from '../../typeorm/repository/perfilRepository'
import { CreatePerfilRepositoryService } from '../../../service/CreatePerfilService'
import { UpdatePerfilRepositoryService } from '../../../service/UpdatePerfilService'

export class PerfilController{
    public async index(request:Request,response:Response):Promise<Response>{
        const { filter }=request.body
        console.log("state",filter)
        const repository=new PerfilRepository()
        const user= await repository.list(filter)
        return response.json(user)
      }
       
        public async create(request:Request,response:Response):Promise<Response>{
        
          const { 
            nome,
            estado_id,
           } = request.body
           
          const create= container.resolve(CreatePerfilRepositoryService)
         
          const typeMunicipe=await create.execute({
            nome,
            estado_id
          })
    
          return response.json(typeMunicipe)
        }
    
        public async update(request:Request,response:Response){
          const { id }=request.params
          const { 
            nome,
            estado_id
           } = request.body
           
          
          const updateService=container.resolve(UpdatePerfilRepositoryService)
          const state=await updateService.execute(id,{ 
            nome,
            estado_id
           })
    
          return response.json(state)
        }
}