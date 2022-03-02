import 'antd/dist/antd.css';

import styled from "styled-components";
import { Breadcrumb as _Breadcrumb } from 'antd'
import _Sider from "antd/lib/layout/Sider";
import  _Layout, { Content as _Content } from "antd/lib/layout/layout";

export const Sider=styled(_Sider)`
    
      position: relative;
      height: 100% !important;
      margi:0 auto !important;
      /* max-width:500px !important;
      min-width:300px !important;
      background-color:#001529 !important; */
`
export const Container=styled(_Layout)`
    margin: 0;

`
export const Content=styled(_Content)`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    padding: 0px 0px;
    width: 1400px !important;
    margin:0;
    section{
        width:90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 28px 0 0;
        font-weight:bold;
        h1{
            font-size:30px;
            color:#1d8efa;

        }
        div{
            width:250px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
 
`
export const Layout=styled(_Layout)`
     padding: 0; 

`
export const Breadcrumb=styled(_Breadcrumb)`
    margin: 16px 0  16px 16px;
    margin-top:100px;
`

