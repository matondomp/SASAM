
import  { IFakeRequestmentRepository } from '../Irequestment/fake/fakeHistoryRequestmentRepository'
import { CreateHistoryRequestmentService } from './createHistoryRequestmentService'


let createRequestmentService:CreateHistoryRequestmentService
let ifakeRequestmentRepository:IFakeRequestmentRepository

describe("HisoryRequestmentRepository",()=>{
   
      beforeEach(()=>{
            ifakeRequestmentRepository=new IFakeRequestmentRepository()
            createRequestmentService= new CreateHistoryRequestmentService(ifakeRequestmentRepository)
      })

      it("should be able to create municipes",async()=>{
           const municipe=await createRequestmentService.execute({
                  description:"luanda",
                  estado_id:"1",
                  user_id:'123',
                  motivo:'925758037',
                  solicitacao_id:'1'
            })

            expect(municipe.description).toBe('luanda')
      })
})