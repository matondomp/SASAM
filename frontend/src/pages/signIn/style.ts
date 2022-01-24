import 'antd/dist/antd.css'

import styled from "styled-components";
import { 
    Input as GetInput,
    Form as getForm,
    Button as _Button
} from 'antd'

import logoAside from '../../assets/logo.png'




export const Container=styled.div`
    display: flex;
    align-items:stretch;
    height: 100vh;
`
export const Content=styled.div`
    
       width: 100%;
        max-width:700px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction:column;
        h1{
            font-size:50px;
            font-weight: bold;
        }
        footer{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 416px;
            margin:40px 0  0  0;
            font-weight: normal;
            font-size: 14px;
            line-height: 22px;
            div span:hover{
                color: blueviolet;
            }
            svg{
                margin-right:30px;
                color: #F25D27;
            }
        }
`
export const Form=styled(getForm)`
        margin-top:70px;
        display: flex;
        align-items: center;
        justify-content: center;
       flex-direction:column;
     
`
export const Input=styled(GetInput)`
   border: 1px solid #DCE2E6 !important;
   background: #FFFFFF !important;
   box-sizing: border-box !important;
   width: 416px !important;
   height: 72px !important;
   box-sizing: border-box !important;
   &:nth-child(1){
            border-radius: 10px 10px 0px 0px !important;
       }
    &:nth-child(2){
        border-radius: 0px 0px 10px 10px !important;
    }
`
export const Button=styled(_Button)`
    width: 416px  !important;
    height: 72px  !important;
    background: #F25D27  !important;
    border-radius: 10px  !important;
    margin-top:20px  !important;
    font-style: normal  !important;
    font-weight: 500  !important;
    font-size: 18px  !important;
    line-height: 26px  !important;
    text-align: center  !important;
    color: #FFFFFF  !important;
`
export const Background=styled.div`
   flex: 1;
   background:url(${logoAside}) no-repeat; 
   background-size:cover; 
`

export const CheckBoxDiv=styled.div`
   margin-top:20px;
   width: 416px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: row;
   color:#A0ACB2;
       input{
           margin-right:10px; 
          
        
       }
   
  
`
