import styled from "styled-components";

import { Layout as _Layout } from 'antd'

export const Container=styled.div`
  /* width: 100%; */
 

`

export const Layout=styled(_Layout)`


 ::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #001529; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #1d8efa; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1d8efac2; 
}

`