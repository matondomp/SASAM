import { Router } from 'express'

import { PermissaoController } from '../controller/permissaoController'

const permissaoController=new PermissaoController()

const permissaoRouter=Router()

permissaoRouter.post('/',permissaoController.create)
permissaoRouter.get('/',permissaoController.index)
permissaoRouter.put('/:id',permissaoController.update)

export { permissaoRouter }