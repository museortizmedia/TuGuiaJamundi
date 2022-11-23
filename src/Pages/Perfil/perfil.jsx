import React, { useEffect, useState } from 'react';

import Menu from '../../Components/Shared/Menu'
import Footer from '../../Components/Shared/Footer'
import LoadingComponent from '../../Components/Shared/Loading';
import NoProfile from '../../Components/Perfil/noProfile'
import ProfileBanner from '../../Components/Perfil/profile';

import TabInfo from '../../Components/Perfil/Tab/Info';
import TabOpinion from '../../Components/Perfil/Tab/Opiniones';
import TabFoto from '../../Components/Perfil/Tab/Foto';
import TabProd from '../../Components/Perfil/Tab/Produc';
import TabMapa from '../../Components/Perfil/Tab/Mapa';

import { useContextFire } from '../../context/fireContext'
import { FaCog } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import OpinionStar from '../../Components/Shared/stars';
import Calificar from '../../Components/Shared/opiniones';

export const Perfil = () => {
    const params = useParams();
    const[profile, setProfile] = useState();
    const[editMode, setEditMode] = useState(false);
    const[localMenu, setMenu] = useState(1);

    const {user, userExist, getUserInfo, getProd, addCalif, getCalif, isCalif, getFotos} = useContextFire();


    useEffect(()=>{
        const getInfo = async() => {
            const paramID = params.userID;
            if(paramID && await userExist(paramID)){
                const newuser = await getUserInfo(paramID);
                setProfile({...newuser})
                //console.log('se abre el perfil de alguien, editmode: '+editMode)

            }else if(paramID){
                //console.log('no se encontró el perfil')
                setEditMode(null);
            }else{
                const newuser = await getUserInfo(user.uid);
                setProfile({...newuser})
                //console.log('tu perfil: modo edicion')
                setEditMode(true);
            }
            
        }
        getInfo();
    },[])

    if(editMode===null) return <NoProfile/>
    if(!profile) return <LoadingComponent/>
    
    return(
    <>
        <Menu currentPage={`${editMode?"perfil":"invitado"}`}/>
            <ProfileBanner profile={profile} editMode={editMode}/>
        
        <div className='d-flex justify-content-center noselect mb-3' style={{width:"100%", height:"130px", marginTop:"0px"}}>
            <div className='text-rigth row' style={{width:"95%"}}>
                <button className={`menu_item d-flex justify-content-center align-items-center bg-transparent border-0
                ${profile.empresa?"col":"col-4"} ${localMenu===1?"text-black":""}`}
                onClick={() => setMenu(1)}>
                    Información
                </button>
                {profile["empresa"]===true&&<>
                <button className={`menu_item col d-flex justify-content-center align-items-center bg-transparent border-0 ${localMenu===3?"text-black":""}`}
                onClick={() => setMenu(3)}>
                    Productos
                </button>
                <button className={`menu_item col d-flex justify-content-center align-items-center bg-transparent border-0 ${localMenu===4?"text-black":""}`}
                onClick={() => setMenu(4)}>
                    Fotos
                </button></>}

                <div className='col-4 text-center text-uppercase fw-bolder' style={{marginTop:"80px"}}>
                    {profile.empresa===true?
                    <>{profile.displayName||profile.email.split("@")[0]}<br/>
                    <OpinionStar profile={profile} />
                    </>
                    :
                    profile.displayName||profile.email.split("@")[0]
                    }
                    
                </div>

                <button className={`menu_item col d-flex justify-content-center align-items-center bg-transparent border-0 ${localMenu===2?"text-black":""}`}
                onClick={() => setMenu(2)}>
                    Opiniones
                </button>
                {profile["empresa"]===true&&
                <button className={`menu_item col d-flex justify-content-center align-items-center bg-transparent border-0 ${localMenu===5?"text-black":""}`}
                onClick={() => setMenu(5)}>
                    Mapa
                </button>}
                <div className='menu_item col d-flex justify-content-center align-items-center'>
                    <Link to='/ajustes'><button className='text-muted text-wrap btn bg-transparent border-0'><FaCog/></button></Link>
                </div>
                
            </div>                
        </div>
    <div className='w-100 row d-flex align-self-center text-center justify-content-center align-items-center noselect'>
        {localMenu===1&&<TabInfo profile={profile} editMode={editMode}/>}
        {localMenu===2&&<TabOpinion profile={profile} editMode={editMode} getCalif={getCalif} getUserInfo={getUserInfo}/>}
        {localMenu===3&&<TabProd profile={profile} editMode={editMode} getProd={getProd}/>}
        {localMenu===4&&<TabFoto profile={profile} editMode={editMode} getFotos={getFotos}/>}
        {localMenu===5&&<TabMapa profile={profile} editMode={editMode}/>}
        
        {(profile.empresa===true&&localMenu!==2)&&
        <div className='col-3' style={{height: "80vh",borderRadius:"40px",backgroundColor:"#F9FBFC",padding:"1em",position:"relative",color: "#656565",zIndex: 0,textAlign:"left"}}>
            <div className='col-4 text-center fw-bolder text-black mb-4' style={{fontSize:"1.2em"}}>Opiniones</div>
            <div style={{lineHeight:"0.75em"}}>
                <div className='row d-flex aling-item-center'>
                    <span className='col-1 text-dark fw-bolder d-inline' style={{fontSize:"1.5em"}}>5</span>
                    <span className='col-7 ms-2 d-inline' style={{Height:"0.5em",backgroundColor:"#D9D9D9",position:"relative",zIndex:"10"}} >
                        <span className='col-7 h-100 d-inline' style={{Height:"0.5em",width:`${profile.stars?profile.stars[4]!==0?profile.stars[4]*100/(profile.stars[0]+profile.stars[1]+profile.stars[2]+profile.stars[3]+profile.stars[4])+'%':"0px":null}`, backgroundColor:"#FFD541",position:"absolute",top:"0px",left:"0px",zIndex:"100"}}/>
                    </span>                    
                    <span className='col-1 d-inline'>{profile.stars?profile.stars[4]:"0"}</span>
                </div>
                    <br/>
                <div className='row d-flex aling-item-center'>
                    <span className='col-1 text-dark fw-bolder d-inline' style={{fontSize:"1.5em"}}>4</span>
                    <span className='col-7 ms-2 d-inline' style={{Height:"0.5em",backgroundColor:"#D9D9D9",position:"relative",zIndex:"10"}} >
                        <span className='col-7 h-100 d-inline' style={{Height:"0.5em",width:`${profile.stars?profile.stars[3]!==0?profile.stars[3]*100/(profile.stars[0]+profile.stars[1]+profile.stars[2]+profile.stars[3]+profile.stars[4])+'%':"0px":null}`,backgroundColor:"#FFD541",position:"absolute",top:"0px",left:"0px",zIndex:"100"}}/>
                    </span>
                    <span className='col-1 d-inline'>{profile.stars?profile.stars[3]:"0"}</span>
                </div>
                <br/>
                <div className='row d-flex aling-item-center'>
                    <span className='col-1 text-dark fw-bolder d-inline' style={{fontSize:"1.5em"}}>3</span>
                    <span className='col-7 ms-2 d-inline' style={{Height:"0.5em",backgroundColor:"#D9D9D9",position:"relative",zIndex:"10"}} >
                        <span className='col-7 h-100 d-inline' style={{Height:"0.5em",width:`${profile.stars?profile.stars[2]!==0?profile.stars[2]*100/(profile.stars[0]+profile.stars[1]+profile.stars[2]+profile.stars[3]+profile.stars[4])+'%':"0px":null}`,backgroundColor:"#FFD541",position:"absolute",top:"0px",left:"0px",zIndex:"100"}}/>
                    </span>
                    <span className='col-1 d-inline'>{profile.stars?profile.stars[2]:"0"}</span>
                </div>
                <br/>
                <div className='row d-flex aling-item-center'>
                    <span className='col-1 text-dark fw-bolder d-inline' style={{fontSize:"1.5em"}}>2</span>
                    <span className='col-7 ms-2 d-inline' style={{Height:"0.5em",backgroundColor:"#D9D9D9",position:"relative",zIndex:"10"}} >
                        <span className='col-7 h-100 d-inline' style={{Height:"0.5em",width:`${profile.stars?profile.stars[1]!==0?profile.stars[1]*100/(profile.stars[0]+profile.stars[1]+profile.stars[2]+profile.stars[3]+profile.stars[4])+'%':"0px":null}`,backgroundColor:"#FFD541",position:"absolute",top:"0px",left:"0px",zIndex:"100"}}/>
                    </span>
                    <span className='col-1 d-inline'>{profile.stars?profile.stars[1]:"0"}</span>
                </div>
                <br/>
                <div className='row d-flex aling-item-center'>
                    <span className='col-1 text-dark fw-bolder d-inline' style={{fontSize:"1.5em"}}>1</span>
                    <span className='col-7 ms-2 d-inline' style={{Height:"0.5em",backgroundColor:"#D9D9D9",position:"relative",zIndex:"10"}} >
                        <span className='col-7 h-100 d-inline' style={{Height:"0.5em",width:`${profile.stars?profile.stars[0]!==0?profile.stars[0]*100/(profile.stars[0]+profile.stars[1]+profile.stars[2]+profile.stars[3]+profile.stars[4])+'%':"0px":null}`,backgroundColor:"#FFD541",position:"absolute",top:"0px",left:"0px",zIndex:"100"}}/>
                    </span>
                    <span className='col-1 d-inline'>{profile.stars?profile.stars[0]:"0"}</span>
                </div>
                </div>
        {/* Añadir Opinion */}
        {profile.uid===user.uid?null:
        <>
        <Calificar user={user} empresa={profile} addCalif={addCalif} getCalif={getCalif} isCalif={isCalif}/>
        </>
        }

        </div>}
    </div>
    <Footer/>
    </>
    )
    
    }
    export default Perfil;