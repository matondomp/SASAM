/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { AddToastModal } from "../../../hooks/toast"
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from "react-icons/fi"
import { useToast } from "../../../hooks/toast"
import { Contaner } from "./style"

interface toastMessage{
    message:AddToastModal,
    style:object
 }

export const Toast:React.FC<toastMessage> =({message,style})=>{
    const { removeToast }=useToast()
    console.log(message,style)
    useEffect(()=>{
       const timer=setTimeout(()=>{
          removeToast(message.id)
       },3000)

       return ()=>{
          clearTimeout(timer)
       }
       
    },[])

    const icons={
        info:<FiInfo size={24} />,
        error: <FiAlertCircle size={20} />,
        success:<FiCheckCircle size={20} />,
    }

   return(
    <Contaner type={message.type}  hasDescription={!!message.desciption}
       style={style}
    >

       { icons[message.type] }
       
    <div>
        <strong>{message.title}</strong>
        { 
        message.desciption &&
         <p>{message.desciption}</p> 
        }
        
    </div>

    <button>
      <FiXCircle size={18} onClick={()=>removeToast(message.id)} />
    </button>
    </Contaner>
   )
}

