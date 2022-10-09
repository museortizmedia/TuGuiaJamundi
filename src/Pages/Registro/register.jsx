import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import Pick from '../../Images/Brand/Pick.png';
import { FaFacebook, FaGoogle} from 'react-icons/fa';
/* Auth */
import { useDispatch } from 'react-redux';
//import { useForm } from '../../myHooks/useForm';
import { registerAuth } from '../../firebase/Thunks';
/* Auth */

import Menu from '../../Components/Shared/Menu';
import Footer from '../../Components/Shared/Footer'
export const Registro = () => {
    const navigate = useNavigate();
    //variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    /* Auth */
    const dispatch = useDispatch();
    /* Auth */

    const onSubmit = (event) => {
        //reset de form setting
        event.preventDefault();
        resetFormRegister();
        toogleAlerta();
        //setear email y password y registrar
        setEmail(document.getElementById('form_register__email').value);
        setPassword(document.getElementById('form_register__password1').value);
        dispatch(registerAuth(email, password))
        navigate('/');
    }
    const resetFormRegister = () =>{
        document.getElementById('form_register__email').style='';
        document.getElementById('form_register__password1').style='';
        document.getElementById('form_register__password2').style='';
    }
    const verificarPassword = () =>{
        //vacio
        if(document.getElementById('form_register__password1').value===''){
            document.getElementById('form_register__password1').style = '';
            document.getElementById('form_register__password2').style = ''
            return;
        }
        //tamaño e iguales
        if(document.getElementById('form_register__password1').value ===
        document.getElementById('form_register__password2').value &&
        document.getElementById('form_register__password1').value.length>6){            
            document.getElementById('form_register__password1').style = 'border-color: #90ee90';
            document.getElementById('form_register__password2').style = 'border-color: #90ee90';         
        }else{
            document.getElementById('form_register__password1').style = 'border-color: pink';
            document.getElementById('form_register__password2').style = 'border-color: pink';
        }
    }
    const toogleAlerta= (msg) =>{
        const alert = document.getElementById('form_register_alert');
        if(msg===''||msg===null||msg===undefined){
            alert.innerHTML='';
            alert.classList.add('d-none');
        }else{
            alert.innerHTML=msg;
            alert.classList.remove('d-none');
        }
    }
    
    return (
        <>
        <Menu selected="register"/>
        <div className='container w-75 mt-5 mb-5 rounded-4 shadow'>
        <div className='row' style={{backgroundColor: '#F9FBFC'}}>
            <div className='col bg_login_register rounded-4 me-4'></div>

            <div className='col'>
                <div className='mt-5 text-center'>
                <img src={Pick} width='20%' alt=''/>
                <h3 className='fw-bold text-center mt-2 mb-5'>Aquí comienza tu aventura<br/>¡Crea tu cuenta!</h3>                
                </div>                
                
                {/* Auth */}
                <div id='form_register_alert' className="d-none alert alert-danger" role="alert"></div>
                <form onSubmit={(event)=> onSubmit(event)}>
                    <div className='mb-3'>
                        <label className='form-label'>Correo electrónico</label>
                        <input id='form_register__email' required type='email' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Contraseña</label>
                        <input id='form_register__password1' required minLength={7} type='password' className='form-control'
                        onChange={verificarPassword}/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Confirma tu contraseña</label>
                        <input id='form_register__password2' required minLength={7} type='password' className='form-control'
                        onChange={verificarPassword}/>
                    </div>
                    <div className='my-3'>
                        <h5 className='text-center'>TODO LISTO</h5>
                    </div>
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-primary'>Registrarse</button>
                    </div>
                    </form>
                {/* Auth */}
                <div className='container w-100 my-5'>
                    <div className='row text-center mb-4'>
                        <div className='col-12'>Registrarse con:</div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg'>
                            <button className='btn btn-outline-primary w-100 my-1'>
                                <div className='row align-items-center'>
                                    <div className='col-3 align-items-center'>
                                    <FaFacebook style={{fontSize:"41px"}}/>
                                    </div>
                                    <div className='col-9 text-center'>
                                        Facebook
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className='col-12 col-lg'>
                            <button className='btn btn-outline-danger w-100 my-1'>
                                <div className='row align-items-center'>
                                    <div className='col-3'>
                                    <FaGoogle style={{fontSize:"40px"}}/>
                                    </div>
                                    <div className='col-9 text-center'>
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