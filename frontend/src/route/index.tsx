import { 
    Routes, 
    Route, 
    BrowserRouter
 } from 'react-router-dom'

import { DashBord } from '../pages/dashbord'
import { Municipe } from '../pages/municipes'
import { Naibarroad } from '../pages/naibarroad'
import { Distrit } from '../pages/distrit'
import { Municipality } from '../pages/municipality'
import { Province } from '../pages/province'
import { User } from '../pages/utilizador'
import { Solicitacao } from '../pages/solicitacoes/index'
import { TipoMunicipe } from '../pages/tipoMunicipe'
import { MaritalStatus } from '../pages/maritalStatus'

import { GlobalStyle } from './../globalStyle/style'

import { AppProvider } from '../hooks/index'
import { State } from '../pages/state'
import { Priority } from '../pages/priority/index'
import { SignIn } from '../pages/signIn'
import { Perfil } from '../pages/perfil'
import { Permission } from '../pages/permissoes'
import { RoutePrivate } from './route'

 export const HandleRoute=()=>{
     return(
         <BrowserRouter>
            <AppProvider>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/permissoes" element={
                             <RoutePrivate isPrivate={true} >
                                 <Permission />
                             </RoutePrivate>
                            } />
                    <Route path="/perfil" element={
                         <RoutePrivate isPrivate={true} >
                              <Perfil />
                         </RoutePrivate>
                     } />

                    <Route path="/municipe" element={
                        <RoutePrivate isPrivate={true} >
                            <Municipe />
                        </RoutePrivate>
                       } />

                    <Route path="/provincia" element={
                          <RoutePrivate isPrivate={true} >
                             <Province />
                         </RoutePrivate>
                       
                    } />

                    <Route path="/user" element={
                        <RoutePrivate isPrivate={true} >
                            <User />
                        </RoutePrivate>
                      } />

                    <Route path="/municipio" element={
                         <RoutePrivate isPrivate={true} >
                             <Municipality />
                         </RoutePrivate>
                       
                        } />
                    <Route path="/distrito" element={
                        <RoutePrivate isPrivate={true} >
                            <Distrit />
                        </RoutePrivate>
                       } />
                    <Route path="/bairro" element={
                       <RoutePrivate isPrivate={true} >
                          <Naibarroad />
                       </RoutePrivate>
                      } />
                    <Route path="/estado" element={
                       <RoutePrivate isPrivate={true} >
                           <State />
                       </RoutePrivate>
                      } />
                    <Route path="/solicitacoes" element={
                       <RoutePrivate isPrivate={true} >
                          <Solicitacao />
                       </RoutePrivate>
                      } />
                    <Route path="/prioridade" element={
                       <RoutePrivate isPrivate={true} >
                           <Priority />
                       </RoutePrivate>
                       } />
                    <Route path="/tipoMunicipe" element={
                       <RoutePrivate isPrivate={true} >
                           <TipoMunicipe />
                       </RoutePrivate>
                      } />
                    <Route path="/estadoCivil" element={
                       <RoutePrivate isPrivate={true} >
                           <MaritalStatus />
                       </RoutePrivate>
                       } />
                </Routes>
            </AppProvider>
            <GlobalStyle />
         </BrowserRouter>
     )
 }