import { FC } from "react";

import { Container, FooterStyle } from './style'

export const Footer:FC =()=>{

   return (
     <Container>
            <FooterStyle style={{ textAlign: 'center',color:'red' }}>Ant Design ©2018 Created by Ant UED</FooterStyle>
     </Container>
   )
}