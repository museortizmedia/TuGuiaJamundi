import React from "react";
import { FaCrown } from "react-icons/fa";

export const TabOpinion = ({profile, editMode}) => {
    return (
        <>
        <div id="opinion" className='w-100 col d-flex justify-content-center noselect'>
    <div className='row mb-1' style={{height: "80vh",width:"95%",color: "#656565",textAlign:"left",}}>
        
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
                Opiniones de {profile.displayName?profile.displayName:profile.email.split("@")[0]}
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
                <div className="row">
                <div className="col-4 pt-3r">                
                <div style={{height: "100px", width: "100px", borderRadius:"100px",backgroundColor:"lightgrey",position: "absolute",fontSize: "4.5em",color: "white",}}>
                    <div>
                    {profile.nivel%10===0&&<FaCrown style={{
                        position:"absolute",
                        bottom:"82px",
                        left:"30px",
                        color:"yellow",
                        fontSize:"0.5em"
                    }}
                    />
                    }
                    {profile.nivel?profile.nivel:1}
                    </div>
                    
                </div>
                </div>
                
                <div className="col-8 text-start">
                    ¡Felicidades! Estás en nivel {profile.nivel||1}<br/>
                    <small className="text-muted">Haz opiniones y compra productos para seguir subiendo niveles.</small>
                </div>
                </div>

            </div>

        </div>
    </div>
    </div>
        </>
    )
}
export default TabOpinion;