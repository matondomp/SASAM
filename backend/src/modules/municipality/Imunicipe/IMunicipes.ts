import { ImunicipeDTO } from '../dto/municipality'
import { Municipio } from '../infra/typeorm/entities/municipes'

export interface Imunicipio{
    create(date:ImunicipeDTO):Promise<Municipio>
    findById(id:string):Promise<Municipio | undefined>
    update(id:string,date:ImunicipeDTO):Promise<void>
    list():Promise<Municipio[]>
    save(data:Municipio):Promise<Municipio>
}