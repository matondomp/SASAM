
import  { IFakeMunicipeRepository } from '../../municipality/Imunicipe/fake/fakeMunicipesRepository'
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
                  provincia_id:"3"
            })

            expect(municipe.name).toBe('mp')
      })
})