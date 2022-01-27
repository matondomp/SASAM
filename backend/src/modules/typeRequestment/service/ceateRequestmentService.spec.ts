
import { Irequestement } from '../Irequestment/Irequestment'
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
                  description:"luanda",
                  estado_id:"1",
                  sla:"1"
            })

            expect(municipe.description).toBe('luanda')
      })
})