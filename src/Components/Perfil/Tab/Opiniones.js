import React from "react";

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

        {profile.empresa===false?
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

        </div>:null}
    </div>
    </div>
        </>
    )
}
export default TabOpinion;