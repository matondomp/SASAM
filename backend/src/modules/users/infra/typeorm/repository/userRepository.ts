import { getConnection, getRepository, InsertResult, Like, Not, Repository } from 'typeorm'
import { UserDTO } from '../../../dto/IuserDTO'
import { IUsers  } from '../../../Iuser/Iuser'
import { User } from '../entities/user'
import { usersPermissoesPermissaes } from '../entities/userPermission'

export class UserRepository implements IUsers{
    
    private user:Repository<User>
    private userPermissoes:Repository<usersPermissoesPermissaes>

    constructor(
       
    ){
        this.user=getRepository(User)
        
        this.userPermissoes=getRepository(usersPermissoesPermissaes)
    }

    public async create(data:UserDTO):Promise<User>{
        
       const user= this.user.create({...data })
       await this.user.save(user)

       return user
    }

    public async createWithPermission(data:usersPermissoesPermissaes[] | usersPermissoesPermissaes):Promise<InsertResult | any>{

        let itemToBeDeleted=[]
        let user=null
  

        if(Array.isArray(data)){
            for (const item of data) {
                let loadedPosts:any = await getRepository(usersPermissoesPermissaes).findOne({
                   userId:item.userId,
               });
             
               if(loadedPosts){
                   await getRepository(usersPermissoesPermissaes)
                           .delete({userId:loadedPosts.userId})
                   itemToBeDeleted.push(loadedPosts.id)
               }
             }
               
                user= await getConnection().createQueryBuilder()
                                           .insert()
                                           .into(usersPermissoesPermissaes)
                                           .values(data)
                                           .execute();
         
           return user
        }
     
            await getRepository(usersPermissoesPermissaes)
            .delete({userId:data.userId})
        
     }

     public async findPermissioByUserId(id:string):Promise<usersPermissoesPermissaes[] | undefined>{
        const Permissoes=await this.userPermissoes.find({
            where:{ userId:id }
        })

        return Permissoes
    }

    public async findById(id:string):Promise<User | undefined>{
        const user=await this.user.findOne({id})

        return user
    }
    public async findByEmail(email:string): Promise<User | undefined> {
      
        const user=await this.user.findOne({
             where:{ email },
           // relations:['permission']
         })
 
         return user
     }

    public async update(id:string,data:UserDTO):Promise<void>{
         await this.user.update(id,data)
    }
    public async list(filter:string):Promise<User[] | Omit<User ,'password'>[]>{
       
       let user:Omit<User ,'password'>[]=[]
      
       user= await this.user.find()

       return user
    }

    public async save(data:User):Promise<User>{
        const user=await this.user.save(data)

        return user
    }
}