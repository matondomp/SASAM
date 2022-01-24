/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extra-boolean-cast */
import React,{ ReactNode, useCallback} from 'react'

import { useAuth } from "../hooks/auth"
import { SignIn } from "../pages/signIn"

interface ContainerType{
  isPrivate?:boolean,
  children?: ReactNode
}
// eslint-disable-next-line react/prop-types
const RoutePrivate: React.FC<ContainerType> = ({ children, isPrivate=false })=>{
  const { user } = useAuth()
  const forceTypeOfChildren=children as unknown as JSX.Element 
  /* true/true ok
     false/true no
     true/false ok
     false/false
   */
  return  (!!user == isPrivate) ? forceTypeOfChildren
         : isPrivate ? <SignIn /> : forceTypeOfChildren

}

export { RoutePrivate }