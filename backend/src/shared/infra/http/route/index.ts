import { Router } from 'express'
import { municipeRoute } from '../../../../modules/crn_place/infra/http/route/route'
import { distritRoute } from '../../../../modules/distrit/infra/http/route/route'
import { municipioRoute } from '../../../../modules/municipality/infra/http/route/route'

import { provinceRoute } from '../../../../modules/province/infra/http/route/route'
import { naibarroadRoute } from '../../../../modules/neibarroad/infra/http/route/route'

import { requestRoute } from '../../../../modules/requestment/infra/http/route/route'
import { stateRoute } from '../../../../modules/state/infra/http/route/route'
import { priorityRoute } from '../../../../modules/priority/infra/http/route/route'

import { typeMUnicipeRoute }  from '../../../../modules/typeMunicipe/infra/http/route/route'
import { genderRoute } from '../../../../modules/gender/infra/http/route/route'

import { identityRoute } from '../../../../modules/identity/infra/http/route/route'

import { userRouter } from '../../../../modules/users/infra/http/route/route'
import { perfilRouter } from '../../../../modules/perfil/infra/http/route/route'
import { sessionUser } from '../../../../modules/users/infra/http/route/session.route'
import { permissaoRouter } from '../../../../modules/permission/infra/http/route/route'

const route=Router()

route.use('/municipe',municipeRoute)
route.use('/distrito',distritRoute)
route.use('/municipio',municipioRoute)

route.use('/provincia',provinceRoute)
route.use('/bairro',naibarroadRoute)

route.use('/solicitacao',requestRoute)

route.use('/estado',stateRoute)

route.use('/prioridade',priorityRoute)

route.use('/tipo-municipe',typeMUnicipeRoute)

route.use('/estado-civil',genderRoute)

route.use('/identidade',identityRoute)

route.use('/users',userRouter)

route.use('/perfil',perfilRouter)

route.use('/login',sessionUser)

route.use('/permissao',permissaoRouter)

export { route }