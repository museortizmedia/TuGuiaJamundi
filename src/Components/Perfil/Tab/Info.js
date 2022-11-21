import React from "react";
import { FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaMapMarkedAlt, FaBook, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';

export const TabInfo = ({profile, editMode}) => {

    return (
        <div id="info" className='w-100 col d-flex justify-content-center noselect'>
        {profile.empresa===true?
        <>
        <div className='row mb-1' style={{height: "80vh",width:"95%",borderRadius:"40px",backgroundColor:"#F9FBFC",padding:"1em",position:"relative",color: "#656565",zIndex: 0,textAlign:"left",}}>
            {/*console.log(profile.tags.length)*/}
            {editMode===true?
                <textarea className="tagger" placeholder={profile.tags.toString()||'sin tags'} onChange={()=>{console.log('cambiar el contenido de profile.tags')}} />
            :
                <textarea className="tagger" value={profile.tags.length>0?profile.tags.toString():'sin tags'} disabled />
            }
            
            
            <div className='fw-bolder' style={{height:"1px",color:"#303030", fontSize:"1.2em"}}>
                Descripción
                {editMode===true&&<Link to='/ajustes' className='border-0 bg-transparent ps-2 text-reset'><FaEdit/></Link>}
            </div>
            <span className="ps-4">{profile.bio?profile.bio:"sin descripción..."}</span>
            <div className='fw-bolder' style={{height:"1px",color:"#303030", fontSize:"1.2em"}}>
                Contacto
                {editMode===true&&<Link to='/ajustes' className='border-0 bg-transparent ps-2 text-reset'><FaEdit/></Link>}
            </div>
            <div className="lh-base">
            <span className="una_linea"><FaMapMarkerAlt className="p-2"/><span className='fw-bolder'>Direccion: </span>{profile.contacto[0]?profile.contacto[0].split(", ")[0]?profile.contacto[0].split(", ")[0]:'-':'-'}</span><br/>
            <span className="una_linea"><FaMapMarkedAlt className="p-2"/><span className='fw-bolder'>Lugar: </span>{profile.contacto[0]?profile.contacto[0].split(", ")[1]?profile.contacto[0].split(", ")[1]:'-':'-'}</span><br/>
            <span className="una_linea"><FaBook className="p-2"/><span className='fw-bolder'>Teléfono Local: </span>{profile.contacto[1]||'-'}</span><br/>
            <span className="una_linea"><FaPhoneAlt className="p-2"/><span className='fw-bolder'>Teléfono Celular: </span>{profile.contacto[2]||'-'}</span><br/>
            <span className="una_linea"><FaCalendarAlt className="p-2"/><span className='fw-bolder'>Horario: </span>{profile.contacto[3]||'-'}</span>
            </div>
        </div>
        </>
        :
        <>
        <div className='row mb-1' style={{height: "80vh",width:"95%",borderRadius:"40px",backgroundColor:"#F9FBFC",padding:"1em",position:"relative",color: "#656565",zIndex: 0,textAlign:"left",}}>            
            <div className='fw-bolder' style={{height:"1px",color:"#303030", fontSize:"1.2em"}}>
            Biografía
            {editMode===true&&<Link to='/ajustes' className='border-0 bg-transparent ps-2 text-reset'><FaEdit/></Link>}
            </div>
            {profile.bio?profile.bio:"sin biografía..."}
            <div className='fw-bolder' style={{height:"1px",color:"#303030", fontSize:"1.2em"}}>
            WhishList
            {editMode===true&&<Link to='/ajustes' className='border-0 bg-transparent ps-2 text-reset'><FaEdit/></Link>}
            </div>
            <span>Estos son los productos que más le gustan a {profile.displayName?profile.displayName:profile.email.split("@")[0]}</span>
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
        </>
}

        
    
    </div>
    )
}
export default TabInfo;