import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Pick from '../../Images/Brand/Pick.png';
import { FaFacebook, FaGoogle} from 'react-icons/fa';
/* Auth */
import { useDispatch } from 'react-redux';
import { useForm } from '../../myHooks/useForm';
import { registerAuth } from '../../firebase/Thunks';
/* Auth */

import Menu from '../../Components/Shared/Menu';
import Footer from '../../Components/Shared/Footer'
export const Registro = () => {
    //variables
    const submeable = false;
    
    /* Auth */
    const dispatch = useDispatch();
    const {email, password, onInputChange, formState} = useForm({
        email:'',
        password:''
    })
    /* Auth */


    const onSubmit = (event) => {
        event.preventDefault();
        //verificación de datos
        if(submeable){
            //console.log(formState);
            dispatch(registerAuth(email, password))
        }else{
            console.log()
        }
    }
    
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

                <h2 className='fw-bold text-center pt-5 mb-5'>Aquí comienza tu aventura<br/>¡Crea tu cuenta!</h2>
                <div className="alert alert-danger" role="alert" text="holaa">
                    asdg {}
                </div>
                {/* Auth */}
                <form onSubmit={(event)=> onSubmit(event)}>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Correo electrónico</label>
                        <input name='email' type='email' className='form-control'
                        onChange={(event)=>onInputChange(event)} value={email}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password1' className='form-label'>Contraseña</label>
                        <input name='password1' type='password' className='form-control'
                        onChange={(event)=>onInputChange(event)} value={password}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password2' className='form-label'>Confirma tu contraseña</label>
                        <input name='password2' type='password' className='form-control'
                        onChange={(event)=>onInputChange(event)} value={password}/>
                    </div>
                    <div className='my-3'>
                        <h5 className='text-center'>TODO LISTO</h5>
                    </div>
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-primary'>Registrarse</button>
                    </div>
                    </form>
                {/* Auth */}

                {/*<form action='/#'>
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
    </form>*/}

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