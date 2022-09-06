import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Pick from '../../Images/Brand/Pick.png';
import { FaFacebook, FaGoogle} from 'react-icons/fa';

import Menu from '../../Components/Shared/Menu';
import Footer from '../../Components/Shared/Footer'
export const Registro = () => {
    return (
        <>
        <Menu selected="register"/>
        <div className='container w-75 mt-5 mb-5 rounded-4 shadow'>
        <div className='row'>
            <div className='col bg_login_register rounded-4 me-4'></div>

            <div className='col'>
                <div className='text-end'>
                    <img className="p-2" src={Pick} width='15%' alt=''/>
                </div>

                <h2 className='fw-bold text-center pt-5 mb-5'>Hola! Eres Nuevo por Acá?<br/>
                Haz tu registro</h2>

                <form action='/#'>
                    <div className='mb-3'>
                        <label for='email' className='form-label'>Correo electrónico</label>
                        <input type='email' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label for='nombre' className='form-label'>Nombre de Usuario</label>
                        <input type='nombre' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label for='password' className='form-label'>Password</label>
                        <input type='password' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label for='passwordconfirmed' className='form-label'> Confirmar Password</label>
                        <input type='passwordconfirmed' className='form-control'/>
                    </div>
                    <div className='my-3'>
                        <h5 className='text-center'>TODO LISTO</h5>
                    </div>
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-primary'>Registrarse</button>
                    </div>
                </form>

                <div className='container w-100 my-5'>
                    <div className='row text-center'>
                        <div className='col-12'>Registrarse con:</div>
                    </div><br/>
                    <div className='row'>
                        <div className='col'>
                            <button className='btn btn-outline-primary w-100 my-1'>
                                <div className='row align-items-center'>
                                    <div className='col-2'>
                                    <FaFacebook style={{fontSize:"41px"}}/>
                                    </div>
                                    <div className='col-10 text-center'>
                                        Facebook
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className='col'>
                            <button className='btn btn-outline-danger w-100 my-1'>
                                <div className='row align-items-center'>
                                    <div className='col-2'>
                                    <FaGoogle style={{fontSize:"40px"}}/>
                                    </div>
                                    <div className='col-10 text-center'>
                                        Google
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    )
    }
    export default Registro;