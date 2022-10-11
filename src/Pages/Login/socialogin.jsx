import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaFacebook, FaGoogle} from 'react-icons/fa';

export const SocialLogin = ({title=null, setError, navigate, GoogleLogIn, FacebookLogIn}) => {
//al presionar boton de login con google
const handledGoogleLogIn = async () =>{
    try {
         await GoogleLogIn();
         navigate("/")
    } catch (error) {
         setError(error.message)
    }        
 }
 //al presionar boton de login con facebook
 const handledFacebookLogIn = async () =>{
     try {
         await FacebookLogIn();
         navigate("/")    
     } catch (error) {
         setError(error.message)
     }        
 }
return (
    <div className='container w-100 my-5'>
    {title&&
    <div className='row text-center mb-4'>
        <div className='col-12'>{title}</div>
    </div>
    }
    <div className='row'>
        <div className='col-12 col-xlg'>
            <button className='btn btn-outline-primary w-100 my-1' onClick={handledFacebookLogIn}>
                <div className='row align-items-center'>
                    <div className='col-3'>
                        <FaFacebook style={{fontSize:"41px"}}/>
                    </div>
                    <div className='col-9 text-center'>
                        Facebook
                    </div>
                </div>
            </button>
        </div>
        
        <div className='col'>
            <button className='btn btn-outline-danger w-100 my-1' onClick={handledGoogleLogIn}>
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
)
}
export default SocialLogin;