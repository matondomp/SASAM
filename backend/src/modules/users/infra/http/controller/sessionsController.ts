import { Request, Response } from "express"
import { SessionUserService } from '../../../service/sessionUserService'
import { container } from "tsyringe"

export default class SessionsController{


    async create (request: Request, response: Response): Promise<Response>{
            const { email, password } = request.body
            console.log(request.body)
            const sessionUserService =container.resolve(SessionUserService)
            const { user, token }= await sessionUserService.execute({ email, password })
            return response.json({ user, token })
              
   }
}