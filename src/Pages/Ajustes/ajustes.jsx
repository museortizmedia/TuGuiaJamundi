import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from '../../Components/Shared/Menu'
import Footer from '../../Components/Shared/Footer'
import { useContextFire } from '../../context/fireContext';
import { FaUserCircle } from 'react-icons/fa';

export const Ajustes = () => {
    
    const {user, loading} = useContextFire()

    return (
        <>
        <Menu currentPage='ajustes'/>
        <div className='d-flex justify-content-center noselect'>
        <div className='row' style={{width:"95%"}}>
            <div className='col-4 m-4 p-2'>
                <div className='row border border-0 shadow mb-5 d-flex'
                style={{
                    height:"13vh",
                    backgroundColor:"#F9FBFC"
                }}>
                    <div className='col-4 d-flex me-2'>
                    {user.photoURL?
                    <img className='img-fluid aling-self-center' src={user.photoURL} style={{height:"70%",borderRadius:"20px"}}/>
                    :
                    <FaUserCircle style={{width:"auto"}}/>
                    }
                    </div>
                    <div className='col-7'>
                        <div className='row fw-bolder my-auto' style={{fontSize:"1.2em"}}>{user.displayName}</div>
                        <div className='row text-muted my-auto'>{user.empresa==true?"Tu cuenta es empresarial":"Tu cuenta es personal"}</div>
                    </div>
                    
                </div>
                <div className='row border border-0 shadow'
                style={{
                    height:"20vh",
                    backgroundColor:"#F9FBFC"
                }}>
                    <div className='row bg-danger'>a</div>
                    <div className='row bg-warning'>a</div>
                    <div className='row bg-danger'>a</div>
                </div>
            </div>
            
            {/* tu perfil */}
            <div className='col m-2 p-4 border border-0 shadow' style={{
                height:"80vh",
                backgroundColor:"#F9FBFC",
                }}>
                
                <span className='title_footer d-block'>Nombre</span>
                <input placeholder={user.displayName}></input>

                <span className='title_footer d-block'>Biografía</span>
                <input placeholder={user.bio}></input>

                <span className='title_footer d-block'>Foto Perfil</span>
                <img src={user.photoURL}/>
                <button>subir</button>

                <span className='title_footer d-block'>Foto Portada</span>
                <img src={user.portada}/>
                <button>subir</button>

                <p className='text-muted'>Todos los campos son opciones y usted puede eliminar la información en cualquier momento</p>
                <button>Actualizar</button>

            </div>

            {/* Cuenta */}
            <div className='col row m-2 p-4 border border-0 shadow d-none' style={{
                height:"80vh",
                backgroundColor:"#F9FBFC",
                }}>

                    <div className='col-7'>
                        <span className='title_footer d-block'>Correo electrónico</span>
                        <input placeholder={user.email}></input>
                        <span className='title_footer d-block'>Cambiar contraseña</span>
                        <input placeholder='contraseña actual'></input>
                        <input placeholder='contraseña nueva'></input>
                        <input placeholder='confirme la actual contraseña'></input>
                        <p>La contraseña debe tener más de 8 carácteres</p>
                        <button>Actualizar</button>
                        <br/>
                        <a >eliminar cuenta</a>
                        <p className='tect_muted'>Si eliminas la cuenta no habrá vuelta atrás, no podrás recuperar los datos perdidos.</p>
                        <button>Elimina mi cuenta</button>
                    </div>

                    <div className='col'>
                    <span className='title_footer d-block'>Tipo de cuenta</span>
                    <span className='title_footer badge bg-warning d-block'>cuenta empresarial</span>
                    <p>Al cambiar a empresarial perderá todos los niveles adquiridos hasta ahora, se eliminarán todas sus opiniones y no podrá realizar más.</p>
                    </div>
            </div>

            {/* whitelist */}
            <div className='col row m-2 p-4 border border-0 shadow d-none   ' style={{
                height:"80vh",
                backgroundColor:"#F9FBFC",
                }}>
                    <span className='title_footer d-block'>White List</span>
                    <p className='text-muted'>La white list es la lista para mostrar los productos que más te gustan. Las personas podrán señalar que les gusta los productos de tu white list, también puedes votar por otros productos de la white list de otros.</p>
            </div>

            {/* negocio */}
            <div className='col row m-2 p-4 border border-0 shadow d-none' style={{
                height:"80vh",
                backgroundColor:"#F9FBFC",
                }}>
                    <span className='title_footer d-block'>Dirección del negocio</span>
                    <input placeholder={user.dir?user.dir:""}></input>
                    <span className='title_footer d-block'>Link de negocio en maps</span>
                    <input placeholder={user.dir?user.dir:""}></input>
            </div>

            {/* vitrina */}
            <div className='col row m-2 p-4 border border-0 shadow d-none' style={{
                height:"80vh",
                backgroundColor:"#F9FBFC",
                }}>
                    <span className='title_footer d-block'>Tu vitrina</span>
                    <p className='text-muted'>Administra tus productos desde aquí.</p>
                    <span className='title_footer d-block'>Productos</span>
                    <span className='title_footer d-block'>Nuevo producto</span>
                    <input placeholder="titulo"></input>
                    <input placeholder='descripción del producto'></input>
                    <input placeholder='precio del producto'></input>
                    <button>Agregar</button>
                    <input placeholder='enlace de la imagen'></input>
                    <button>subir foto</button>
            </div>

            {/* fotos */}
            <div className='col row m-2 p-4 border border-0 shadow d-none' style={{
                height:"80vh",
                backgroundColor:"#F9FBFC",
                }}>
                    <span className='title_footer d-block'>Tus fotos</span>
                    <p className='text-muted'>Agrega fotos a tu galería para que la gente conozca de tu negocio.</p>
                    <span className='title_footer d-block'>Fotografias</span>
                    <span className='title_footer d-block'>Nueva fotografía</span>
                    <input placeholder="Título de la imagen"></input>
                    <input placeholder='Descripción de la imagen...'></input>
                    <button>Agregar</button>
                    <input placeholder='Enlace de la imagen'></input>                    
                    <button>subir foto</button>
            </div>

        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Ajustes;