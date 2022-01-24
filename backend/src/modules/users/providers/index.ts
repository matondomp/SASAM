import { container } from 'tsyringe'
import { IHashProvider } from './hashProvider/model/IhashProvider'
import { HashProvider } from './hashProvider/implamentation/hashProvider'

container.registerSingleton<IHashProvider>(
    'HashProvider',
    HashProvider
)