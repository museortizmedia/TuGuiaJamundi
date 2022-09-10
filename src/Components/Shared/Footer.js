import React from 'react';
import { FaFacebook, FaInstagram, FaGit } from 'react-icons/fa';
import {Container, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import logo from '../../Images/Brand/logo1080.png'
function Footer() {
    return (
        <>
            <Container fluid className='text-center text-muted mt-5 p-2 bg-light' style={{width: "95%"}}>
                <section className='mt-3'>
                    <form action=''>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-auto'>
                                <p className='pt-2'>
                                    <strong>Conozca más información</strong>
                                </p>
                            </div>
                            <div className='col-md-5 col-12'>
                                <div className='form-outline form-white mb-4'>
                                    <Form.Control className='bg-transparent' type='email' id='newspaper' placeholder='correo electrónico'/>
                                </div>
                            </div>
                            <div className='col-auto'>
                                <button type='submit' className='btn btn-outline-warning mb-4'>
                                    Suscríbete
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
                <div className='row'>
                    <div className='col-md-3 col-sm-6'>
                        <img src={logo} alt="" width={"80%"}/>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4>El sitio</h4>
                        <ul className='list-unstyled'>
                            <li><a href="/" className="menu_item_footer">Inicio</a></li>
                            <li><a href="/mapa" className="menu_item_footer">El Mapa</a></li>
                            <li><a href="/login" className="menu_item_footer">Iniciar Sesion</a></li>
                            <li><a href="/registrarse" className="menu_item_footer">Registrarse</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4>Sitios de Interés</h4>
                        <ul className='list-unstyled'>
                            <li><a rel="noreferrer" target="_blank" href="/#" className="menu_item_footer">Términos de uso web</a></li>
                            <li><a rel="noreferrer" target="_blank" href="/#" className="menu_item_footer">Aviso de Privacidad</a></li>
                            <li><a rel="noreferrer" target="_blank" href="/#" className="menu_item_footer">Política de tratamiento de datos</a></li>
                            <li><a rel="noreferrer" target="_blank" href="/#" className="menu_item_footer">Reversión de pago</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4>Redes</h4>
                        <ul className='list-unstyled'>
                            <li>
                                <a rel="noreferrer" target="_blank" href="/#" className="menu_item_footer p-2"><FaFacebook/></a>
                                <a rel="noreferrer" target="_blank" href="/#" className="menu_item_footer p-2"><FaInstagram/></a>
                                <a rel="noreferrer" target="_blank" href="/#" className="menu_item_footer p-2"><FaGit/></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mt-2 mb-2'>
                    <p className='text-xs-center noselect'>
                    &copy;{new Date().getFullYear()} Jamundí, Valle del Cauca - Todos los derechos reservados
                    </p>
                </div>
            </Container>
        </>
    )
}
export default Footer;