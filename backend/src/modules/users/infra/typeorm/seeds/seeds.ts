import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { User } from '../entities/user'
import { HashProvider } from '../../../providers/hashProvider/implamentation/hashProvider'


export default class CreateUsers implements Seeder {


  public async run(factory: Factory, connection: Connection): Promise<any> {

    const hashProvider=new HashProvider()

    const hashed= await hashProvider.generateHash("alex123")

    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
         { 
          name: 'ALexandre Canzenze',
          email:"alexandrecanzenze@gmail.com",
          username: 'super-adimin' ,
          password:hashed, 
          telefone:"925758099"
         },
      ])
      .execute()
  }
}