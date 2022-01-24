import { container } from 'tsyringe'

import { MunicipeRepository } from '../../modules/crn_place/infra/typeorm/repository/municipesRepository'
import { Imunicipe } from '../../modules/crn_place/Imunicipe/IMunicipes'

import { IDistrit } from '../../modules/distrit/Idistrit/IDistrit'
import { DistritRepository } from '../../modules/distrit/infra/typeorm/repository/distritRepository'

import { Imunicipio } from '../../modules/municipality/Imunicipe/IMunicipes'
import { MunicipioRepository } from '../../modules/municipality/infra/typeorm/repository/municipesRepository'

import { NaibarroadRepository } from '../../modules/neibarroad/infra/typeorm/repository/naibarroadRepository'
import { INaibarroad }  from '../../modules/neibarroad/Inaibarroad/INaibarroad'

import { provinceRepository } from '../../modules/province/infra/typeorm/repository/provinceRepository'
import { Iprovince }  from '../../modules/province/Iprovince/IProvince'
import { Irequestement } from '../../modules/requestment/Irequestment/Irequestment'
import { RequestmentRepository } from '../../modules/requestment/infra/typeorm/repository/requestmentRepository'

import { IState } from '../../modules/state/Istate/state'
import { StateRepository } from '../../modules/state/infra/typeorm/repository/stateRepository'

import { Ipriority } from '../../modules/priority/Ipriority/Ipriority'
import { PriorityRepository } from '../../modules/priority/infra/typeorm/repository/priorityRepository'

import { TypeMunicipeRepository } from '../../modules/typeMunicipe/infra/typeorm/repository/typeMunicipeRepository'
import { ITypeMunicipe } from '../../modules/typeMunicipe/ItypeMunicipe/typeMunicipe'

import { GenderRepository } from '../../modules/gender/infra/typeorm/repository/genderRepository'
import { IGender } from '../../modules/gender/Igender/gender'

import { IIdentity } from '../../modules/identity/Iidentity/identity'
import { IdentityRepository } from '../../modules/identity/infra/typeorm/repository/identityRepository'

import { UserRepository } from '../../modules/users/infra/typeorm/repository/userRepository'
import { IUsers } from '../../modules/users/Iuser/Iuser'

import { IPerfils } from '../../modules/perfil/Iperfil/Iperfil'
import { PerfilRepository } from '../../modules/perfil/infra/typeorm/repository/perfilRepository'
import { IPermission } from '../../modules/permission/Ipermission/Ipermission'
import { PermissionRepository } from '../../modules/permission/infra/typeorm/repository/permissionRepository'

import '../../modules/users/providers'

container.registerSingleton<Imunicipe>(
    "MunicipeRepository",
    MunicipeRepository
)

container.registerSingleton<IDistrit>(
    "DistritRepository",
    DistritRepository
)

container.registerSingleton<Imunicipio>(
    "MunicipioRepository",
    MunicipioRepository
)

container.registerSingleton<INaibarroad>(
    "NaibarroadRepository",
    NaibarroadRepository
)

container.registerSingleton<Iprovince>(
    "ProvinceRepository",
    provinceRepository
)

container.registerSingleton<Irequestement>(
    "RequestmentRepository",
    RequestmentRepository
)

container.registerSingleton<IState>(
    "StateRepository",
    StateRepository
)

container.registerSingleton<Ipriority>(
    "PriorityRepository",
    PriorityRepository
)

container.registerSingleton<ITypeMunicipe>(
    "TypeMunicipeRepository",
    TypeMunicipeRepository
)

container.registerSingleton<IGender>(
    "GenderRepository",
    GenderRepository
)

container.registerSingleton<IIdentity>(
    "IdentityRepository",
    IdentityRepository
)

container.registerSingleton<IUsers>(
    "UserRepository",
    UserRepository
)

container.registerSingleton<IPerfils>(
    "PerfilRepository",
    PerfilRepository
)
container.registerSingleton<IPermission>(
    "PermissionRepository",
    PermissionRepository
)












