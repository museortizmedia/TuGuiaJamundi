import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useContextFire } from '../../context/fireContext'
import { FaSignInAlt, FaUserCircle} from 'react-icons/fa';
import LoadingComponent from './Loading';

import 'bootstrap/dist/css/bootstrap.min.css'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export const Menu = ({currentPage=null}) => {
    const {auth, user, loading, logout} = useContextFire(); 

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[loading])

    const handlelogout = async() => {
        await logout()
    }
    
    //menu cargando
    if(loading) return (
    <div className="container-fluid text-center" style={{width: "100%", height:"10%"}}>
        <LoadingComponent/> 
    </div>
    )
    //menu mensaje error en configuración
    if(currentPage===null) return (
        <div className="alert alert-danger alert-dismissible fade show d-flex align-items-center" role="alert">
        <div>
            menu error: seleccione la currentPage
        </div>
        </div>
    )
    //menu retorno defecto
    return (
        <div className="container-fluid bg-trasparent p-2 mt-2 navbar-expand-sm" style={{width: "100%"}}>
        <div className="row mx-auto noselect" style={{width: "95%"}}>

            <div className="col-2 my-auto">
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
            {!auth&&<>
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

            {auth&&<>
                <OverlayTrigger
                delay={{ hide: 450, show: 300 }}
                overlay={(props) => (
                <Tooltip {...props}>
                    {"Ver perfil"}
                </Tooltip>
                )}
                placement="bottom"
                >
                    <Link className={`p-2 nav-item nav-link menu_item d-inline
                    ${currentPage==='perfil' && 'disabled'}`}
                    to="/perfil">
                        {!auth.photoURL? <FaUserCircle className="m-2 pr-2" size={44}/> : 
                        <img
                        src={user?user.photoURL: auth.photoURL}
                        alt=""
                        style={{width: "40px", borderRadius:"10px"}}
                        className="m-2 pr-2 shadow"
                        />}

                        {auth.displayName? user?user.displayName:auth.displayName:"Sin nombre"}
                    </Link>
                    

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
                    <FaSignInAlt style={{fontSize:"25px"}}/>
                </button>
                </OverlayTrigger>
            </>}
            
            </div>
                
                
                
            </div>
        </div>
    )
}
export default Menu;