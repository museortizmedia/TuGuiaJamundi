import React from 'react';
import { Link } from 'react-router-dom';

import { useContextAuth } from '../../context/authContext'
import { FaSignInAlt, FaUser, FaUserCircle } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export const Menu = ({currentPage=null}) => {
    const {user, loading, logout} = useContextAuth(); 

    const handlelogout = async() => {
        await logout()
    }

    if(loading) return <h1>loading...</h1>
    if(currentPage===null) return <h1 className='text-danger'>menu error: seleccione la currentPage</h1>

    return (
        <div className="container-fluid bg-trasparent p-2 mt-2 navbar-expand-sm" style={{width: "100%"}}>
        <div className="row mx-auto noselect">

            <div className="col-2 my-auto text-center ">
                <a href='/TuGuiaJamundi/'>
                    <img src={require('../../Images/Brand/logo1080.png')} alt={"Logo"} style={{width: "120px"}}/>
                </a>
            </div>

            <div className="col-10 text-end my-auto noselect">
            <Link className={`p-2 nav-item nav-link menu_item d-inline
            ${currentPage==='default' && 'disabled'}`}
             to="/">
                Inicio
            </Link>
            <Link className={`p-2 nav-item nav-link menu_item d-inline
            ${currentPage==='mapa' && 'disabled'}`}
             to="/mapa">
                El Mapa
            </Link>
            {!user&&<>
            <Link className={`p-2 nav-item nav-link menu_item d-inline
            ${currentPage==='registrarse' && 'disabled'}`}
             to="/registrarse">
                Registrarse
            </Link>
            <Link className={`p-2 nav-item nav-link menu_item d-inline
            ${currentPage==='login' && 'disabled'}`}
             to="/login">
                Iniciar Sesión
            </Link>
            </>}

            {user&&<>
                <OverlayTrigger
                delay={{ hide: 450, show: 300 }}
                overlay={(props) => (
                <Tooltip {...props}>
                    {"Ver perfil"}
                </Tooltip>
                )}
                placement="bottom"
                >
                    {user.photoURL?
                    <Link className={`p-2 nav-item nav-link menu_item d-inline
                    ${currentPage==='perfil' && 'disabled'}`}
                    to="/perfil">
                        <img
                        src={user.photoURL}
                        alt=""
                        style={{width: "40px", borderRadius:"10px"}}
                        className="m-2 shadow"
                    />
                        {user.displayName||"Sin nombre"}
                    </Link>
                    :
                    <Link className={`p-2 nav-item nav-link menu_item d-inline
                    ${currentPage==='perfil' && 'disabled'}`}
                    to="/perfil">
                        <FaUserCircle className='me-2' style={{fontSize:"40px"}}/>
                        {user.displayName||"Sin nombre"}
                    </Link>}

                </OverlayTrigger>
            
                <OverlayTrigger
                delay={{ hide: 450, show: 300 }}
                overlay={(props) => (
                <Tooltip {...props}>
                    {"Salir"}
                </Tooltip>
                )}
                placement="bottom"
                >
                <button className={`p-2 btn btn-link nav-item nav-link menu_item d-inline
            ${currentPage==='' && 'disabled'}`}
                onClick={handlelogout}>
                    <FaSignInAlt style={{fontSize:"20px"}}/>
                </button>
                </OverlayTrigger>
            </>}
            
            </div>
                
                
                
            </div>
        </div>
    )
}
export default Menu;