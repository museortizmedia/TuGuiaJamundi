import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import Pick from '../../Images/Brand/Pick.png';

import { useContextFire } from '../../context/fireContext';

import Menu from '../../Components/Shared/Menu';
import Footer from '../../Components/Shared/Footer'
import SocialLogin from '../../Components/Shared/socialogin';
export const Login = () => {
//variables
    const {login, loginWithGoogle, loginWithFacebook, recoverPassword} = useContextFire();
    const navigate = useNavigate();

    //objeto user con claves email y contraseña del usuario que desea registrarse
    const [user, setUser] = useState({
        form_login__email: '', //inicialmente vacias
        form_login__password: ''
    });
    //state de error
    const [error, setError] = useState();

//funciones

    //evento al actualizar inputs
    const onHandleChange = ({target:{name, value}}) =>{
        setUser({...user, [name]:value}) //sobreescribe el objeto user reemplazando la clave name por valor value del input
    }
    //al enviar formulario de login
    const onSubmit = async (e) => { //se escribe async porque llamaremos una funcion backend de firebase
        console.log(user.form_login__email, user.form_login__password)
        e.preventDefault(); //cancela evento de reenvio para que no se refresque la página
        setError(''); //resetea estilos
        try {
            await login(user.form_login__email, user.form_login__password) //el await nos permite llamar el asincrno (contenido de la funcion de firebase)
            navigate("/");           
        } catch (error) {
            setError(error.code)
        }
    }
    //al presionar boton de recuperar contraseña
    const handledRecover = async () =>{
        if(!user.form_login__email) return setError("Escribe tu correo electrónico en la parte correspondiente")
        try {
            await recoverPassword(user.form_login__email)
            setError("Hemos enviado un correo de recuperación a tu cuenta") 
        } catch (error) {
            switch(error.code){
                default:
                    setError(error.message)
                    break;
                case 'auth/user-not-found':
                    setError("No encontramos usuarios con este correo")
                    break;
            }            
        }        
    }

return (
    <>
    <Menu currentPage="login"/>
    <div className='container w-75 mt-5 mb-5 rounded-4 shadow'>
            <div className='row'>
                <div className='col bg_login_register rounded-4 me-4'></div>

                <div className='col text-center p-3'>
                <img className="p-2" src={Pick} width='20%' alt=''/>
                    <h2 className='fw-bold text-center mt-2 mb-5'>Bienvenido</h2>
                    {error&&<div className="alert alert-danger" role="alert">{error}</div>}
                    <form onSubmit={(event)=> onSubmit(event)}>
                        <div className='mb-4 text-start'>
                            <label htmlFor='form_login__email' className='form-label'>Correo electrónico</label>
                            <input name='form_login__email'required type='emai' className='form-control'  onChange={onHandleChange}/>
                        </div>
                        <div className='mb-4 text-start'>
                            <label htmlFor='form_login__password' className='form-label'>Contraseña</label>
                            <input name='form_login__password' required type='password' className='form-control' minLength={0} onChange={onHandleChange}/>
                        </div>
                        <div className='mb-4 form-check text-start'>
                            <input name='form_login_connected' type='checkbox' className='form-check-input'/>
                            <label htmlFor='connected' className='form-check-label'>Mantenerme conectado</label>
                        </div>
                        <div className='d-grid'>
                            <button type='submit' className='btn btn-warning'>Iniciar sesión</button>
                        </div>
                    </form>

                        <div className='my-auto text-center'>
                            <span>No tienes cuenta? <a href='/#/registrarse'>Regístrate</a></span><br/><br/>
                            <span className='m-2 p-2'><button className='btn btn-link text-primary' onClick={handledRecover}>Recuperar contraseña</button></span>
                        </div>
                    
                    <SocialLogin
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
export default Login;