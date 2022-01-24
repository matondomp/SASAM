/* eslint-disable no-empty-pattern */
/* eslint-disable react/prop-types */
import React,{ 
    createContext,
    useContext, 
    useCallback,
    useState
} from "react";
import { uuid } from "uuidv4";

import { ToastComponent } from '../components/toastComponent/toastComponent'

export interface AddToastModal{
id:string
type:"success" | "error" | "info"
title:string
desciption?:string
}
interface ToastContextType{
removeToast(id:string):void
addToast(message:Omit<AddToastModal, 'id'>):void
}


export const ToastContext=createContext<ToastContextType>({} as ToastContextType) 

export const Toast:React.FC=({ children })=>{

const [messages, setMessage]=useState<AddToastModal[]>([])

const addToast=useCallback(({ title, type, desciption }:Omit<AddToastModal, 'id'>)=>{
const id=uuid()
const toast={
  id,
  type,
  title,
  desciption
}
setMessage((state)=>[...state,toast])
    console.log("remove",messages)
},[])

const removeToast=useCallback((id:string)=>{ 
    setMessage( (state)=> state.filter( message=>message.id!=id ) ) 
    console.log("remove")
},[])

return (
<ToastContext.Provider value={{ removeToast, addToast }}>
    { children }
    <ToastComponent message={messages} />
</ToastContext.Provider>
)
}

export const useToast=():ToastContextType =>{
const provider= useContext(ToastContext)
if(!provider){
    throw new Error("useToast is not provided");
}
return provider
}