import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import Pick from '../../Images/Brand/Pick.png';

//import { useDispatch } from 'react-redux';
//import { registerAuth } from '../../firebase/Thunks';
import { useContextFire } from '../../context/fireContext';


import Menu from '../../Components/Shared/Menu';
import Footer from '../../Components/Shared/Footer'
import SocialLogin from '../../Components/Shared/socialogin';

export const Registro = () => {
//variables
    const {singup, loginWithFacebook, loginWithGoogle} = useContextFire();
    //const dispatch = useDispatch();
    const navigate = useNavigate();

    //objeto user con claves email y contraseña del usuario que desea registrarse
    const [user, setUser] = useState({
        form_register__email: '', //inicialmente vacias
        form_register__password1: '',
        form_register__password2: ''
    });
    //state de error
    const [error, setError] = useState();


    //evento al actualizar inputs
    const onHandleChange = ({target:{name, value}}) =>{
        if(name==='form_register__password1'||name==='form_register__password2')
        {
            verificarPassword(name, value); //ux de estilos
        }
        setUser({...user, [name]:value}) //sobreescribe el objeto user reemplazando la clave name por valor value del input
    }
    const onSubmit = async (e) => { //se escribe async porque llamaremos una funcion backend de firebase
        e.preventDefault(); //cancela evento de reenvio para que no se refresque la página
        resetFormRegister(); //resetea estilos
        await singup(user.form_register__email, user.form_register__password1) //el await nos permite llamar el asincrno (contenido de la funcion de firebase)
        .then((userCredential) => { //si sse registra correctamente
            //const user = userCredential.user;
            navigate("/");
        })
        .catch((error) => { //si sucede un error
            switch(error.code)
            {
                default:
                    setError(error.code)
                    break;
                case 'auth/email-already-in-use':
                    setError('Este correo ya fue usado para crear una cuenta')
                    break;
            }
          })
    }

    const resetFormRegister = () =>{
        setError('');
        document.getElementById('form_register__password1').style='';
        document.getElementById('form_register__password2').style='';
    }
    const verificarPassword = (name, value) =>{
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
    
    return (
        <>
        <Menu currentPage="registrarse"/>
        <div className='container w-75 mt-5 mb-5 rounded-4 shadow'>
        <div className='row bg-card'>
            <div className='col bg_login_register rounded-4 me-4'></div>

            <div className='col p-3'>
                <div className='mt-5 text-center'>
                <img src={Pick} width='20%' alt=''/>
                <h3 className='fw-bold text-center mt-2 mb-5'>Aquí comienza tu aventura<br/>¡Crea tu cuenta!</h3>                
                </div>                
                
                {/* Auth */}
                
                {error&&<div className="alert alert-danger" role="alert">{error}</div>}
                <form onSubmit={(event)=> onSubmit(event)}>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='form_register__email'>Correo electrónico</label>
                        <input name='form_register__email' required type='email' className='form-control' onChange={onHandleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='form_register__password1'>Contraseña</label>
                        <input id='form_register__password1' name='form_register__password1' required minLength={7} type='password' className='form-control'
                        onChange={onHandleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='form_register__password2'>Confirma tu contraseña</label>
                        <input id='form_register__password2' name='form_register__password2' required minLength={7} type='password' className='form-control'
                        onChange={onHandleChange}/>
                    </div>
                    <div className='my-3'>
                        <h5 className='text-center'>TODO LISTO</h5>
                    </div>
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-warning'>Registrarse</button>
                    </div>
                    </form>
                {/* Auth */}
                
                <SocialLogin
                    title="registrarse con:"
                    setError={setError}
                    navigate={navigate}
                    GoogleLogIn={loginWithGoogle}
                    FacebookLogIn={loginWithFacebook}
                />
            </div>
        </div>
    </div>
    <Footer/>
    </>
    )
    }
    export default Registro;