import { IgenderDTO } from '../dto/gender'
import { Gender } from '../infra/typeorm/entities/gender'

export interface IGender{
    create(date:IgenderDTO):Promise<Gender>
    findById(id:string):Promise<Gender | undefined>
    update(id:string,date:IgenderDTO):Promise<void>
    list(filter:string):Promise<Gender[]>
    save(Gender:Gender):Promise<Gender>
}