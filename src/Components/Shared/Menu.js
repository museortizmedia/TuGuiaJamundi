import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {Row, Col, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Menu = ({selected}) => {

    const Activar_IniciarSesion = () => {
        document.getElementById('sesion_active').classList.remove('d-none');
        document.getElementById('sesion_noactive').classList.add('d-none');
    }
    const Cerrar_IniciarSesion = () => {
        document.getElementById('sesion_active').classList.add('d-none');
        document.getElementById('sesion_noactive').classList.remove('d-none');
    }
    const Ocultar_IniciarSesion = () => {
        document.getElementById('btn_login').classList.add('d-none');
    }
    const Ocultar_Registros = () => {
        document.getElementById('btn_register_sa').classList.add('d-none');
        document.getElementById('btn_register').classList.add('d-none');
    }

    useEffect(() => {
        switch(selected){
            default:
                break;
            case "login":
                Ocultar_IniciarSesion();
                break;
            case "register":
                Cerrar_IniciarSesion()
                Ocultar_Registros()
                break;
            case "user":
                Activar_IniciarSesion();
                break;
        }
    });

    

    return (
        <>
        <Container fluid className="bg-trasparent p-2 navbar-expand-sm" style={{width: "95%"}}>
        <Row className="mx-auto">
            <Col xs={2} className="my-auto">
                <a href='/TuGuiaJamundi/'>
                    <img src={require('../../Images/Brand/logo1080.png')} alt={"Logo"} style={{width: "120px"}}/>
                </a>
            </Col>
            <Col xs={10} className="text-end my-auto d-none d-sm-block">
            <a id="btn_mapa" className="p-2 nav-item nav-link menu_item d-inline " href='/TuGuiaJamundi/#/mapa'>El Mapa</a>
                <span id='sesion_noactive'>
                    <a id="btn_register" className="p-2 nav-item nav-link menu_item d-inline" href='/TuGuiaJamundi/#/registrarse'>Registrarse</a>
                    <a id="btn_login" className="p-2 nav-item nav-link menu_item d-inline" href='/TuGuiaJamundi/#/login'>Iniciar Sesión</a>
                </span>
                <span id='sesion_active' className='d-none'>
                <a id="btn_register_sa" className="p-2 nav-item nav-link menu_item d-inline" href='/TuGuiaJamundi/#/registrarse'>Registrarse</a>
                <a href='/'>
                    <img className="p-2 nav-item nav-link menu_item d-inline" src={require('../../Images/Brand/User.png')} alt={"User"} title="cerrar sesión" style={{width: "60px"}} onClick={Cerrar_IniciarSesion}/>
                </a>
                </span>
                
            </Col>
        </Row>
        </Container>
        </>
    )
}
export default Menu;