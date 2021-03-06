import React,{ useCallback } from 'react'
import { RiSettings4Line } from 'react-icons/ri'
import { GoRequestChanges } from 'react-icons/go'
import { FaUsersCog } from 'react-icons/fa'

import { Menu, Button, Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined,
} from '@ant-design/icons';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Container,Layout as _Layout } from './style'


export const Aside:React.FC=()=>{
  
  const [menuChangeActive,setMenuChangeActive]=useState('')
  let navigate = useNavigate();
  const { SubMenu } = Menu;
  

  const hendleChangeTitleActive=(value:string)=>{
    //e.preventDefault()
     setMenuChangeActive(value)
  }


const hendleNavegate=useCallback((value)=>{
  // e.preventDefault()
   navigate(value)
},[])

  const [collapsed,setCollapsed]=useState<any>(false)


  const toggleCollapsed = () => {
      setCollapsed(!collapsed)
  };

    return(
        <_Layout style={{
              backgroundColor:"#001529", 
              height:'100vh', 
              width:256, 
              overflowY: 'auto',
              padding:'14px'

            }}>

       <Container >
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: '16px'}}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={[`${menuChangeActive}`]}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        > 
        {/* inlineCollapsed={collapsed} */}

          <Menu.Item  key="1" onClick={(event)=>{ hendleChangeTitleActive('negocio');hendleNavegate('/municipe')}} icon={<FaUsersCog size={20} />}>
             Municipes
          </Menu.Item>
   
              <SubMenu key="negocio" title="Negocio"  icon={<GoRequestChanges size={20} />}>
                    <Menu.Item key="negocio2" onClick={()=>{hendleChangeTitleActive('negocio2');hendleNavegate('/solicitacoes')}}>
                      Solicitações
                    </Menu.Item>
                    {/* <Menu.Item key="negocio3" onClick={()=>hendleChangeTitleActive('negocio3')}>Histórico</Menu.Item>
           */}  </SubMenu>

          <SubMenu key="sub1" icon={<RiSettings4Line size={20}/>} title="Configurações">

           

             <SubMenu key="sub2" title="Empresa">
                <SubMenu key="sub3" title="Utilizador">
                    <Menu.Item key="11" onClick={()=>hendleChangeTitleActive('11')}>
                       <Link  to='/user'>
                            Listagem
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="12" onClick={()=>hendleChangeTitleActive('12')}>
                        <Link to='/permissoes'>
                           Permissões
                        </Link>
                    </Menu.Item>
                    
                    <Menu.Item key="13" onClick={()=>hendleChangeTitleActive('13')}>
                       <Link to='/perfil'>
                           Perfil
                        </Link>
                    </Menu.Item>
                </SubMenu>

                <Menu.Item key="14" onClick={()=>hendleChangeTitleActive('14')}>Instituição</Menu.Item>
             </SubMenu>

             <SubMenu key="sub4" title="Morada">
                      <Menu.Item key="15" onClick={()=>hendleChangeTitleActive('15')}>
                        <Link to='/provincia'>
                            Província
                        </Link>
                      </Menu.Item>

                        <Menu.Item key="16" onClick={()=>hendleChangeTitleActive('16')}>
                           <Link to='/municipio'>
                               Município
                            </Link>    
                         </Menu.Item>

                    <Menu.Item key="17" onClick={()=>hendleChangeTitleActive('17')}>
                      <Link to='/distrito'>
                        Distrito
                      </Link>
                    </Menu.Item>

                       <Menu.Item key="18" onClick={()=>hendleChangeTitleActive('18')}>
                         <Link to='/bairro' >
                           Bairro
                          </Link>  
                       </Menu.Item>
             </SubMenu>

             <SubMenu key="sub5" title="Solicitações">
                   <Menu.Item key="19" onClick={()=>hendleChangeTitleActive('19')}>
                        <Link to="/tipoSolicitacoes">Tipo de solicitação</Link>
                    </Menu.Item> 
                    
                    <Menu.Item key="20" onClick={()=>hendleChangeTitleActive('20')}>
                        <Link to="/prioridade">Prioridade</Link>
                      
                    </Menu.Item>
                    <Menu.Item key="21" onClick={()=>hendleChangeTitleActive('21')}> 
                       <Link to='/estado'>Estados</Link>
                    </Menu.Item>
             </SubMenu>

             <SubMenu key="sub6" title="Munícipes">
                    <Menu.Item key="22" onClick={()=>hendleChangeTitleActive('22')}>
                        <Link to="/estadoCivil">Estado Civil</Link>
                    </Menu.Item>
                    
                    <Menu.Item key="23" onClick={()=>hendleChangeTitleActive('23')}>
                        <Link to="/tipoMunicipe">Tipo De Munícipes</Link>
                      
                    </Menu.Item>
             </SubMenu>
             
          </SubMenu>

          


        </Menu>
      </Container>

      </_Layout>  
    )
}