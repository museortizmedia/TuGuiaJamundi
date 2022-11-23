import React from "react";
import GMap from "../../Mapa/unmapa";

export const TabMapa = ({profile}) => {

    const onClickMap = (event, anchor, payload) =>{
        //clic en marca de empresa en el menu de mapa
        //console.log(payload)
    }

    if(profile?profile.empresa?profile.contacto?true:false:false:false)
    return (
        <div id="map" className='w-100 col d-flex justify-content-center noselect'>
            <div className='row mb-1' style={{height: "80vh",width:"95%",borderRadius:"40px",backgroundColor:"#F9FBFC",padding:"1em",position:"relative",color: "#656565",zIndex: 0,textAlign:"left"}}>
                {profile.contacto[4]?
                <>
                <div className="col">
                <GMap marcas={[[profile.uid, profile.contacto[4].latitude,profile.contacto[4].longitude]]} onclickmark={onClickMap}/>
                </div>
                <div className="col-3 border p-2 border-0 h-50 shadow-sm bg-white d-flex justify-content-center align-items-center flex-wrap">
                <span className="fw-bolder text-black" style={{fontSize:"0.6em"}}>{profile.contacto[0]?profile.contacto[0]:null}</span>
                <span className="fw-bolder text-black" style={{fontSize:"0.6em"}}>{profile.contacto[1]?profile.contacto[1]:null}</span>
                <span className="fw-bolder text-black" style={{fontSize:"0.6em"}}>{profile.contacto[2]?profile.contacto[2]:null}</span>
                </div>
                </>

                
                :"Todavía no se ha configurado la localización de este negocio"
            }
            </div>
        </div>
    )
}
export default TabMapa;