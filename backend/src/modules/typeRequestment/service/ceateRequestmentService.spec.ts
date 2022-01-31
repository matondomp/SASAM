
import { TypeIrequestement } from '../Irequestment/Irequestment'
import  { IFakeRequestmentRepository } from '../Irequestment/fake/fakeRequestmentRepository'
import { CreateRequestmentService } from './createRequestmentService'


let createRequestmentService:CreateRequestmentService
let ifakeRequestmentRepository:IFakeRequestmentRepository

describe("CreateMunicipesService",()=>{
   
      beforeEach(()=>{
            ifakeRequestmentRepository=new IFakeRequestmentRepository()
            createRequestmentService= new CreateRequestmentService(ifakeRequestmentRepository)
      })

      it("should be able to create municipes",async()=>{
           const municipe=await createRequestmentService.execute({
                  name:"luanda",
                  estado_id:"1",
            })

            expect(municipe.name).toBe('luanda')
      })
})