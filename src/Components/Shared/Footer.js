import React from 'react';
import { FaFacebook, FaInstagram, FaGit } from 'react-icons/fa';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import logo from '../../Images/Brand/logo1080.png'
function Footer() {
    return (
        <>
            <Container fluid className='text-center text-muted mt-5 p-2 bg-light'><div className='mx-auto mt-4' style={{width: "95%"}}>
                <div className='row mt-3'>
                    <div className='col-md-3 col-sm-6 p-2 noselect'>
                        <img src={logo} alt="" width={"60%"}/>
                    </div>
                    <div className='col-md-3 col-sm-6 p-2 noselect text_footer'>
                        <span className='title_footer'>El sitio</span>
                        <ul className='list-unstyled'>
                            <li><a href="/TuGuiaJamundi/" className="menu_item_footer">Inicio</a></li>
                            <li><a href="/TuGuiaJamundi/#/mapa" className="menu_item_footer">El Mapa</a></li>
                            <li><a href="/TuGuiaJamundi/#/login" className="menu_item_footer">Iniciar Sesion</a></li>
                            <li><a href="/TuGuiaJamundi/#/registrarse" className="menu_item_footer">Registrarse</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6 p-2 noselect text_footer'>
                        <span className='title_footer'>Sitios de Interés</span>
                        <ul className='list-unstyled'>
                            <li><a rel="noreferrer" target="_blank" href="/TuGuiaJamundi/#" className="menu_item_footer">Términos de uso web</a></li>
                            <li><a rel="noreferrer" target="_blank" href="/TuGuiaJamundi/#" className="menu_item_footer">Aviso de Privacidad</a></li>
                            <li><a rel="noreferrer" target="_blank" href="/TuGuiaJamundi/#" className="menu_item_footer">Política de tratamiento de datos</a></li>
                            <li><a rel="noreferrer" target="_blank" href="/TuGuiaJamundi/#" className="menu_item_footer">Reversión de pago</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6 p-2 noselect text_footer'>
                        <span className='title_footer'>Redes</span>
                        <ul className='list-unstyled'>
                            <li style={{fontSize: "1.8em"}}>
                                <a rel="noreferrer" target="_blank" href="https://www.facebook.com/muse.ortiz/" className="menu_item_footer p-2"><FaFacebook/></a>
                                <a rel="noreferrer" target="_blank" href="https://www.instagram.com/muse_times/" className="menu_item_footer p-2"><FaInstagram/></a>
                                <a rel="noreferrer" target="_blank" href="https://github.com/museortizmedia" className="menu_item_footer p-2"><FaGit/></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <p className='text-xs-center noselect text_footer mt-2 '>
                    &copy;{new Date().getFullYear()} Jamundí, Valle del Cauca - Todos los derechos reservados
                    </p>
                </div>
            </div></Container>
        </>
    )
}
export default Footer;