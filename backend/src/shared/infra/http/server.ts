import 'reflect-metadata'
import 'express-async-errors'

import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'

import '../typeorm'
import '../../injection'

import { route } from '../http/route'
import AppError from '../../errors/appError'

const app=express()
app.use(cors())
app.use(express.json())
app.use(route)

/* app.use((error:Error, request:Request, response:Response, next:NextFunction)=>{

    if(error instanceof AppError){
       return response.status(error.statusCode).json({
         error:"error",
         message:error.message
       })
   }
    return  response.status(500).json({
          error:"error",
          message:"internal server error"
    })
}) */

app.listen(3332,()=>{
    console.log("running in port 3332 🚀️🚀️🚀️🚀️")
})