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
import { FaCog, FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';



export const Perfil = () => {
    const params = useParams();
    const[profile, setProfile] = useState();
    const[editMode, setEditMode] = useState(false);
    const[localMenu, setMenu] = useState(1);

    const {user, userExist, getUserInfo} = useContextFire();

    const hallarEstrellas = (uid) =>{
        const prom = 3.7;
        return <span className='fst-italic fw-light text-decoration-underline' style={{color:"#DAD8D1"}}>{prom} <FaStar style={{color:"#FFD541"}}/><FaStar/><FaStar/><FaStar/><FaStar/></span>;
    }

    useEffect(()=>{
        const getInfo = async() => {
            const paramID = params.userID;
            if(paramID && await userExist(paramID)){
                const newuser = await getUserInfo(paramID);
                setProfile({...newuser})
                console.log('se abre el perfil de alguien, editmode: '+editMode)

            }else if(paramID){
                console.log('no se encontró el perfil')
                setEditMode(null);
            }else{
                const newuser = await getUserInfo(user.uid);
                setProfile({...newuser})
                console.log('tu perfil: modo edicion')
                setEditMode(true);
            }
            
        }
        getInfo();
    },[])

    if(editMode===null) return <NoProfile/>
    if(!profile) return <LoadingComponent/>
    
    return(
    <>
        <Menu currentPage="perfil"/>
            <ProfileBanner profile={profile} editMode={editMode}/>
        
        <div className='d-flex justify-content-center noselect mb-3' style={{width:"100%", height:"130px", marginTop:"0px"}}>
            <div className='text-rigth row' style={{width:"95%"}}>
                <button className={`d-flex justify-content-center align-items-center text-black bg-transparent border-0
                ${user.empresa?"col":"col-4"}`}
                onClick={() => setMenu(1)}>
                    Información
                </button>
                {profile["empresa"]===true&&<>
                <button className='col d-flex justify-content-center align-items-center text-muted bg-transparent border-0'
                onClick={() => setMenu(3)}>
                    Productos
                </button>
                <button className='col d-flex justify-content-center align-items-center text-muted bg-transparent border-0'
                onClick={() => setMenu(4)}>
                    Fotos
                </button></>}

                <div className='col-4 text-center text-uppercase fw-bolder' style={{marginTop:"80px"}}>
                    {profile.empresa===true?
                    <>{profile.displayName||profile.email.split("@")[0]}<br/>{hallarEstrellas()}</>
                    :
                    profile.displayName||profile.email.split("@")[0]
                    }
                    
                </div>

                <button className='col d-flex justify-content-center align-items-center text-muted bg-transparent border-0'
                onClick={() => setMenu(2)}>
                    Opiniones
                </button>
                {profile["empresa"]===true&&
                <button className='col d-flex justify-content-center align-items-center text-muted bg-transparent border-0'
                onClick={() => setMenu(5)}>
                    Mapa
                </button>}
                <div className='col d-flex justify-content-center align-items-center'>
                    <Link to='/ajustes'><button className='text-muted text-wrap btn bg-transparent border-0'><FaCog/></button></Link>
                </div>
                
            </div>                
        </div>
    <div className='w-100 row d-flex align-self-center text-center justify-content-center align-items-center noselect'>
        {localMenu===1&&<TabInfo profile={profile} editMode={editMode}/>}
        {localMenu===2&&<TabOpinion profile={profile} editMode={editMode}/>}
        {localMenu===3&&<TabProd profile={profile} editMode={editMode}/>}
        {localMenu===4&&<TabFoto profile={profile} editMode={editMode}/>}
        {localMenu===5&&<TabMapa profile={profile} editMode={editMode}/>}
        <div className='col-3' style={{height: "80vh",borderRadius:"40px",backgroundColor:"#F9FBFC",padding:"1em",position:"relative",color: "#656565",zIndex: 0,textAlign:"left"}}>
            {profile.empresa===true?"Opiniones":"Opinar"}
        </div>
    </div>
    <Footer/>
    </>
    )
    
    }
    export default Perfil;