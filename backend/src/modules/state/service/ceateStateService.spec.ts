
import  { IFakeStateRepository } from '../Istate/fake/fakeStateRepository'
import { CreateStateService } from './createStateService'


let createStateService:CreateStateService
let iFakeStateRepository:IFakeStateRepository

describe("CreateMunicipesService",()=>{
   
      beforeEach(()=>{
            iFakeStateRepository=new IFakeStateRepository()
            createStateService= new CreateStateService(iFakeStateRepository)
      })

      it("should be able to create municipes",async()=>{
           const municipe=await createStateService.execute({
                  name:"luannda",
                  estado_id:"1"
            })

            expect(municipe.name).toBe('luannda')
      })
})