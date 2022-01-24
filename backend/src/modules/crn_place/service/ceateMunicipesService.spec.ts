
import { Imunicipe } from '../Imunicipe/IMunicipes'
import  { IFakeMunicipeRepository } from '../../crn_place/Imunicipe/fake/fakeMunicipesRepository'
import { CreateMunicipesService } from './createMunicipesService'


let createMunicipesService:CreateMunicipesService
let iFakeMunicipeRepository:IFakeMunicipeRepository

describe("CreateMunicipesService",()=>{
   
      beforeEach(()=>{
            iFakeMunicipeRepository=new IFakeMunicipeRepository()
            createMunicipesService= new CreateMunicipesService(iFakeMunicipeRepository)
      })

      it("should be able to create municipes",async()=>{
           const municipe=await createMunicipesService.execute({
                  name:"mp",
                  estado_id:"1",
                  pai:"pedro",
                  mae:"isabel",
                  residencia:"malueka", 
                  data_nascimento:new Date(),
                  email:"mp@gmail.com",
                  telefone:"388999", 
                  bairro_id:"nando", 
                  user_id:"1", 
                  tipo_municipe_id:"1", 
                  genero_id:"2", 
                  estado_cil_id:"1", 
            })

            expect(municipe.name).toBe('mp')
      })
})