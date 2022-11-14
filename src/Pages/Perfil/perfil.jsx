import React from 'react';

import Menu from '../../Components/Shared/Menu'
import Footer from '../../Components/Shared/Footer'

import { useContextFire } from '../../context/fireContext'
import { FaPlus, FaCrown, FaInfoCircle, FaEdit, FaCog, FaUserCircle } from 'react-icons/fa';

export const Perfil = () => {
    const {auth, loading, user} = useContextFire();

    const changePic = (pic) => {
        alert("cambiar "+pic)
    }

    return(<>
        <Menu currentPage="perfil"/>
        <div className='w-100 mt-3 d-flex align-self-center text-center justify-content-center align-items-center noselect'>
        <div className='shadow d-flex align-self-center text-center justify-content-center align-items-center' style={{
    borderRadius: "30px",
    backgroundImage: `url('${user.portada?user.portada:"https://picsum.photos/2160/1080"}')`,
    height: "200px",
    width: "95%",
    backgroundPosition: "center",
  	backgroundRepeat: "no-repeat",
  	backgroundSize: "cover",
    padding: "1em",
    position: "relative",
    }}>
        <button style={{
                    height: "40px",
                    width:"40px",
                    borderRadius:"40px",
                    backgroundColor:"rgba(103,103,103,.7)",
                    zIndex:100,
                    position: "absolute",
                    bottom: "10px",
                    right:"20px",
                    color: "white",
                    fontSize:"1.2em",
                    border:"0px",
                    lineHeight:"1em",
                    alignContent:"center"
                }}
            onClick={() => changePic("portada")} ><FaPlus/></button>

        <div className='shadow'
        style={{
        height: "135px",
        width:"135px",
        borderRadius:"135px",
        backgroundColor:"lightgrey",
        zIndex:100,
        position: "relative",
        top: "100px",
        }}
        >
            {user.photoURL?
            <img  src={user.photoURL}
                referrerPolicy='no-referrer'
                alt=""
                style={{
                    height: "121px",
                    width:"121px",
                    borderRadius:"120px",
                    objectFit: "cover",
                    zIndex:100,
                    position: "relative",
                    top: "7px",
                }}
            />
            :
            <FaUserCircle style={{
                height: "121px",
                width:"121px",
                borderRadius:"120px",
                zIndex:100,
                position: "relative",
                top: "7px",
            }} />
            }
            <button style={{
                    height: "40px",
                    width:"40px",
                    borderRadius:"40px",
                    backgroundColor:"lightgrey",
                    zIndex:100,
                    position: "absolute",
                    bottom: "8px",
                    left: "0px",
                    color: "white",
                    fontSize:"1.2em",
                    border:"0px",
                    lineHeight:"1em"
                }}
                onClick={() => changePic("photoURL")} ><FaPlus/></button>
            <div style={{
                    height: "40px",
                    width:"40px",
                    borderRadius:"40px",
                    backgroundColor:"lightgrey",
                    zIndex:100,
                    position: "absolute",
                    bottom: "8px",
                    left: "91px",
                    fontSize: "1.5em",
                    color: "white",
                }}>
                    <div>
                    <FaCrown
                    style={{position:"absolute",
                    bottom:"32px",
                    left:"10px",
                    color:"yellow"
                    }}
                    />
                    {user.nivel?user.nivel:1}
                    </div>
                </div>
        </div>
</div>
</div>  

<div className='d-flex justify-content-center noselect' style={{width:"100%", height:"110px", marginTop:"0px"}}>
    <div className='text-rigth row' style={{width:"95%"}}>
        <button className='col-4 d-flex justify-content-center align-items-center text-black bg-transparent border-0'
        onClick={() => changePic("info")}>
            Información
        </button>
        <div className='col-4 text-center text-uppercase fw-bolder' style={{marginTop:"80px"}}>
            {user.displayName?user.displayName:user.email.split("@")[0]}
        </div>        
        <button className='col-3 d-flex justify-content-center align-items-center text-muted bg-transparent border-0'
        onClick={() => changePic("opciones")}>
            Opciones
        </button>
        <div className='col-1 d-flex justify-content-center align-items-center'>
            <button className='text-muted text-wrap btn bg-transparent border-0'
            onClick={() => changePic("mas ajustes")}><FaCog/></button>
        </div>
    </div>
                
</div>

<div id="info" className='w-100 row d-flex justify-content-center noselect'>
<div className='row word-wrap hidescroll lh-base mb-5' style={{
        height: "100px",
        width:"95%",
        borderRadius:"40px",
        backgroundColor:"#F9FBFC",
        padding:"1em",
        position:"relative",
        color: "#656565",
        zIndex: 0,
        overflow:"auto",
    }}>
        <FaInfoCircle fontSize={"3em"} style={{position:"fixed",bottom:"0px",right:"0px", color:"#F4F4F4", zIndex:100}}/>
        <div className='fw-bolder' style={{color:"#303030", fontSize:"1.2em"}}>Biografía<button className='border-0 bg-transparent'><FaEdit/></button></div>
            {user.bio?user.bio:"sin biografía..."} 
</div>

<div className='row word-wrap hidescroll lh-base' style={{
        height: "300px",
        width:"95%",
        borderRadius:"40px",
        backgroundColor:"#F9FBFC",
        padding:"1em",
        position:"relative",
        color: "#656565",
        zIndex: 0,
        overflow:"auto",
    }}>
        <FaInfoCircle fontSize={"3em"} style={{position:"fixed",bottom:"0px",right:"0px", color:"#F4F4F4", zIndex:100}}/>
        <div className='fw-bolder lh-1' style={{color:"#303030", fontSize:"1.2em"}}>WhiteList<button className='border-0 bg-transparent'><FaEdit/></button></div>
        <span>Estos son los productos que más le gustan a {user.displayName?user.displayName:user.email.split("@")[0]}</span>
        <div className='row'>
            <div className='col m-2 card'>a</div>
            <div className='col m-2 card'>a</div>
            <div className='col m-2 card'>a</div>
        </div>
        <div className='row'>
            <div className='col m-2 card'>a</div>
            <div className='col m-2 card'>a</div>
            <div className='col m-2 card'>a</div>
        </div>
</div>
</div>

<div id="opciones" className='w-100 row d-flex justify-content-center noselect'>
<div className='d-flex align-self-center text-center justify-content-center align-items-center' style={{width:"95%"}}>
    
    <div className='col me-2 word-wrap hidescroll lh-base' style={{
        borderRadius:"40px",
        backgroundColor:"#F9FBFC",
        padding:"1em",
        position:"relative",
        color: "#656565",
        zIndex: 0,
        overflow:"auto",
    }}>
        <div className='fw-bolder lh-1' style={{color:"#303030", fontSize:"1.2em"}}>
            Opiniones de {user.displayName?user.displayName:user.email.split("@")[0]}
            <hr/>
        </div>
        <div>
            <div>opinion 1</div>
            <div>opinion 2</div>
        </div>
    </div>

    <div className='col word-wrap hidescroll lh-base' style={{
        borderRadius:"40px",
        backgroundColor:"#F9FBFC",
        padding:"1em",
        position:"relative",
        color: "#656565",
        zIndex: 0,
        overflow:"auto",
    }}>
        <div className='fw-bolder text-center lh-1' style={{color:"#303030", fontSize:"1.2em"}}>
            Marcador de niveles
            <hr/>
        </div>

    </div>

</div>
</div>
        
        <Footer/>
        </>)
    
    }
    export default Perfil;