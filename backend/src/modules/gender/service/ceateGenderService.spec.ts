
import  { IFakeGenderRepository } from '../Igender/fake/fakeGenderRepository'
import { CreateGenderService } from './createGenderService'


let createGenderService:CreateGenderService
let iFakeGenderRepository:IFakeGenderRepository

describe("CreateMunicipesService",()=>{
   
      beforeEach(()=>{
            iFakeGenderRepository=new IFakeGenderRepository()
            createGenderService= new CreateGenderService(iFakeGenderRepository)
      })

      it("should be able to create municipes",async()=>{
           const municipe=await createGenderService.execute({
                  name:"Solteiro",
                  estado_id:'1'
            })

            expect(municipe.name).toBe('Solteiro')
      })
})