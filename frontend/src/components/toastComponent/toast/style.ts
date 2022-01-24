
import styled, { css } from "styled-components";
import { animated } from "react-spring"


interface TypeError{
    type?: "success" | "error" | "info"
    hasDescription:boolean
}

const getTypeError={
    info: css`
      background:#ebf8ff;
      color:#3172b7 !important;
  `,
    success: css`
      background:#e6fffa;
      color:#2e656a !important;
    `,
    error: css`
       background:#fdddec;
       color:#f53030 !important;
  `,

}


export const Contaner =styled(animated.div)<TypeError>`
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius:10px;
  box-shadow:2px 2px 8px rgba(0,0,0,0.2);
  display: flex;
  background:#ebf8ff;
  color:#3172b7;

  ${props=>getTypeError[props.type || 'info']}

  & + div{
      margin-top: 8px;
  }
  
  > svg{
     margin:4px 12px 0 0
  }
  div{
      flex:1;
      p{
      margin-top:4px;
      line-height:20px;
      font-size:14px;
      opacity: 0.8;

    }
  }
  

  button{
      position: absolute;
      right:4%;
      top:19;
      opacity: 0.6;
      border:0;
      background:transparent;
      color:inherit;
  }

  ${props=>!props.hasDescription && css`
  
      align-items:center;
      svg{
          margin-top:0;
      }
  `}
 
`