import { hash,compare  } from 'bcryptjs'

import { IHashProvider } from '../../hashProvider/model/IhashProvider'

export class HashProvider implements IHashProvider {
    
    public async generateHash(payload:string):Promise<string>{
      return hash(payload,8)
    }

    public async compare(payload:string,hashed:string):Promise<boolean>{
        return compare(payload,hashed)
    }

}