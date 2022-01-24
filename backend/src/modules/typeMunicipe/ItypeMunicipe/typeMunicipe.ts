import { ITypeMunicipeDTO } from '../dto/typeMunicipe'
import { TypeMunicipes } from '../infra/typeorm/entities/typeMunicipe'

export interface ITypeMunicipe{
    create(date:ITypeMunicipeDTO):Promise<TypeMunicipes>
    findById(id:string):Promise<TypeMunicipes | undefined>
    update(id:string,date:ITypeMunicipeDTO):Promise<void>
    list(filter:string):Promise<TypeMunicipes[]>
    save(data:TypeMunicipes):Promise<TypeMunicipes>
}