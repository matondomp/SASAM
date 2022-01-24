/* eslint-disable react/prop-types */
import React from 'react'
import { useTransition } from 'react-spring'

import { Container } from './style'
import {  AddToastModal } from "../../hooks/toast"
import { Toast } from "./toast/toast"

interface toastMessage{
   message:AddToastModal[]
}

const ToastComponent:React.FC<toastMessage> =({message})=>{

  const toastWithTransition=useTransition(
      message,
     {
      from:{ right:"-120%" },
      enter:{ right:"0%" },
      leave:{ right:"-120%",opacity: 0.4  },
      delay: 200,
    }
  )

    return (
      <Container>
         {
           toastWithTransition((props,item)=>(
              <Toast  key={item.id} message={item} style={props} /> 
            ))
         }
      </Container>
    )
}

export { ToastComponent }/*  */