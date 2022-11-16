import React from "react";
import {FaInfoCircle, FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaMapMarkedAlt, FaBook, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';

export const TabInfo = ({profile, editMode}) => {

    return (
        <div id="info" className='w-100 col d-flex justify-content-center noselect'>
        {profile.empresa===true?
        <>
        <div className='row mb-1' style={{height: "80vh",width:"95%",borderRadius:"40px",backgroundColor:"#F9FBFC",padding:"1em",position:"relative",color: "#656565",zIndex: 0,textAlign:"left",}}>
            <textarea style={{height:"50px"}} placeholder={profile.tags||'sin tags'}></textarea>
            
            <div className='fw-bolder' style={{height:"1px",color:"#303030", fontSize:"1.2em"}}>
                Descripción
                {editMode===true&&<Link to='/ajustes' className='border-0 bg-transparent ps-2 text-reset'><FaEdit/></Link>}
            </div>
            {profile.bio?profile.bio:"sin biografía..."}
            <div className='fw-bolder' style={{height:"1px",color:"#303030", fontSize:"1.2em"}}>
                Contacto
                {editMode===true&&<Link to='/ajustes' className='border-0 bg-transparent ps-2 text-reset'><FaEdit/></Link>}
            </div>
            {profile.contacto?
            <div className="lh-base">
            <span className="una_linea"><FaMapMarkerAlt className="p-2"/><span className='fw-bolder'>Direccion: </span>{profile.contacto[0]||'-'}</span><br/>
            <span className="una_linea"><FaMapMarkedAlt className="p-2"/><span className='fw-bolder'>Lugar: </span>{profile.contacto[1]||'-'}</span><br/>
            <span className="una_linea"><FaBook className="p-2"/><span className='fw-bolder'>Teléfono Local: </span>{profile.contacto[2]||'-'}</span><br/>
            <span className="una_linea"><FaPhoneAlt className="p-2"/><span className='fw-bolder'>Teléfono Celular: </span>{profile.contacto[3]||'-'}</span><br/>
            <span className="una_linea"><FaCalendarAlt className="p-2"/><span className='fw-bolder'>Horario: </span>{profile.contacto[4]||'-'}</span>
            </div>
            :
            <>
            </>
            }
        </div>
        </>
        :
        <>
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
                    <div className='fw-bolder' style={{color:"#303030", fontSize:"1.2em"}}>
                        Biografía
                        {editMode===true&&<Link to='/ajustes' className='border-0 bg-transparent ps-2 text-reset'><FaEdit/></Link>}
                    </div>
                        {profile.bio?profile.bio:"sin biografía..."} 
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
                    <div className='fw-bolder lh-1' style={{color:"#303030", fontSize:"1.2em"}}>
                        WhiteList
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