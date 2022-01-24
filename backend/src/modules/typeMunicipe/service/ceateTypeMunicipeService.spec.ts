
import  { IFakeTypeMunicipeRepository } from '../ItypeMunicipe/fake/fakeTypeMunicipe'
import { CreateTypeMinicipeService } from './createTypeMunicipeService'


let createTypeMinicipeService:CreateTypeMinicipeService
let iFakeTypeMunicipeRepository:IFakeTypeMunicipeRepository

describe("CreateTypeMunicipesService",()=>{
   
      beforeEach(()=>{
            iFakeTypeMunicipeRepository=new IFakeTypeMunicipeRepository()
            createTypeMinicipeService= new CreateTypeMinicipeService(iFakeTypeMunicipeRepository)
      })

      it("should be able to create type municipes",async()=>{
           const municipe=await createTypeMinicipeService.execute({
                  name:"impresa",
                  estado_id:'1'
            })

            expect(municipe.name).toBe('impresa')
      })
})