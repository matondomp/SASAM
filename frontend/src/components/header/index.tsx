import React, { CSSProperties } from "react";
import { IoIosLogOut } from 'react-icons/io'
import { useNavigate  } from 'react-router-dom'

import { Header as _Header} from "antd/lib/layout/layout";
import { Menu } from "antd";

interface IType{
    style?:CSSProperties | undefined;
}

export const Header:React.FC<IType>=({ style })=>{
    const navegate= useNavigate()
    function  powerOff() {
         localStorage.removeItem("@sasam-app:token")
         localStorage.removeItem("@sasam-app:user")
         console.log("power off")
         navegate('/')
    }

    return(
        <_Header className="header" style={{...style,position: 'fixed', zIndex: 1, width: '100%'}} >
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{
                 width: '90%',
                 marginTop:'10px',
                display:'flex',
                justifyContent:'flex-end',
                alignItems:'center'
                
                }}>
              {/*   <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item> */}
                <IoIosLogOut size={35} color={'#fff'} style={{ cursor:'pointer' }} onClick={powerOff} />
            </Menu>
        </_Header>
    )
}