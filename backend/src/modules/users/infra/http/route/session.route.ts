import { Router } from "express"
import SessionsController from "../controller/sessionsController"

const sessionUser = Router()
const sessionsController=new SessionsController()

sessionUser.post("/",sessionsController.create)

export { sessionUser }