import { UserDTO  } from '../../dto/IuserDTO';
import { IUsers } from '../Iuser'
import { User } from '../../infra/typeorm/entities/user'

export class IFakeUserRepository implements IUsers{
    listUser:any=[]
    public async create(data:UserDTO):Promise<User>{
        const user=new User()
        Object.assign(user,{...data})
        this.listUser.push(user)
        return user
    }
    public async findById(id:string):Promise<User | undefined>{
       const user=this.listUser.find((item:any)=>item.id==id)
       return user
    }
    public async update(id:string,data:UserDTO):Promise<void>{
        const index=this.listUser.findIndex((item:any)=>item.id==id)
        this.listUser[index]=data
        return this.listUser[index]
    }
    public async list():Promise<User[]>{
        return this.listUser
    }

    public async save(data:User):Promise<User>{

        this.listUser.push(data)
        
        return data
      }

      public async findByEmail(email:string): Promise<User | undefined> {
        const geUtser=this.listUser.find((user:User)=>user.email===email)
        return geUtser
     }
}