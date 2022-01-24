
import { IFakeUserRepository } from '../Iuser/fake/fakeUserRepository'
import { CreateUserRepositoryService } from './CreateUserService'
import { FakeHashProvider } from '../../../modules/users/providers/hashProvider/fake/fakeHashProvider'

let createUserRepositoryService:CreateUserRepositoryService
let iFakeUserRepository:IFakeUserRepository
let fakeHashProvider:FakeHashProvider

describe("CreateUsersService",()=>{
   
      beforeEach(()=>{
            iFakeUserRepository=new IFakeUserRepository()
            fakeHashProvider=new FakeHashProvider()
            createUserRepositoryService= new CreateUserRepositoryService(iFakeUserRepository,fakeHashProvider)
      })

      it("should be able to create users",async()=>{
           const municipe=await createUserRepositoryService.execute({
                  name:"impresa",
                  estado_id:'1',
                  email:"mp@gmail.com",
                  password:"123",
                  telefone:"925758037",
                  username:"mp",
                  perfil_id:"1"
            })

            expect(municipe.email).toBe('mp@gmail.com')
      })
})