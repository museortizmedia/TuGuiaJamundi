import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Index from './Pages/Inicio/index';
import Login from './Pages/Login/login';
import Register from './Pages/Registro/register';
import Mapa from './Pages/Mapa/mapa';
import Perfil from './Pages/Perfil/perfil';
import Ajustes from './Pages/Ajustes/ajustes';

import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from './Components/Shared/ProtectedRoute';

export const MainApp = () => {
    return (
    <>
        <HashRouter>
            <Routes>
                    <Route path="/" element={<Index/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/registrarse" element={<Register/>} />
                    <Route path="mapa">
                        <Route path='' element={<Mapa/>}/>
                        <Route path=':filtro' element={<Mapa/>}/>
                    </Route>
                    {/*<Route path="/perfil" element={
                        <ProtectedRoute>
                            <Perfil/>
                        </ProtectedRoute>
                    } />*/}
                    <Route path="/perfil">
                        <Route path=':userID' element={<ProtectedRoute><Perfil/></ProtectedRoute>}/>
                        <Route path='me' element={<ProtectedRoute><Perfil/></ProtectedRoute>}/>
                    </Route>
                    <Route path="/ajustes" element={<Ajustes/>}>
                    </Route>
                    <Route path='/*' element={ <Navigate to='/'/>} />
            </Routes>
        </HashRouter>
    </>
    )
}
export default MainApp;