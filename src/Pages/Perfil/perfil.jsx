import React from 'react';

import Menu from '../../Components/Shared/Menu'
import Footer from '../../Components/Shared/Footer'

import { useContextFire } from '../../context/fireContext'
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { AuthErrorCodes } from 'firebase/auth';

export const Perfil = () => {
    const {auth, user} = useContextFire();
    console.log("user: "+JSON.stringify(user))
    console.log(auth?true:false)

    return(<>
        <Menu currentPage="perfil"/>
        <div className='w-100 mt-3 d-flex align-self-center text-center justify-content-center align-items-center'>
        <div className='shadow' style={{
    borderRadius: "30px",
    backgroundImage: "url('https://i.picsum.photos/id/851/2160/1080.jpg?hmac=y5R_Amsnxkjzhdb8kU9gAEM1zNiFQQHAHkY4-ajdbKw')",
    height: "200px",
    width: "95%",
    backgroundPosition: "center",
  	backgroundRepeat: "no-repeat",
  	backgroundSize: "cover",
    padding: "1em",
    position: "relative",
    }}>
        <img  src={user?user.portada:'https://picsum.photos/2160/1080'}
                        alt=""
                        style={{width: "100px",
                        height: "150px",
                        width:"150px",
                        borderRadius:"100px",
                        zIndex:100,
                        backgroundPosition: "center",
  	                    backgroundRepeat: "no-repeat",
  	                    backgroundSize: "cover",
                        position: "absolute",
                        bottom: "-40px",
                        right: "",
                        left: "",
                        }}
                        className="m-2 pr-2 shadow"
                        />      

</div>
</div>
        
        <Footer/>
        </>)
    
    }
    export default Perfil;