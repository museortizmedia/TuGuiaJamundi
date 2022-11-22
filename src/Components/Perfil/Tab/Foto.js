import React, { useEffect, useState } from "react";

export const TabFoto = ({getFotos}) => {
    const [fotosList, setFL] = useState(null);

    useEffect(()=>{
        const fotos = async() =>
        {
            setFL( await getFotos() )
        }
        fotos();
        
    },[])

    useEffect(()=>{
        console.log(fotosList)
    },[fotosList])

    return (
        <div id="foto" className='w-100 col d-flex justify-content-center noselect'>
            <div className='row mb-1' style={{height: "80vh",width:"95%",borderRadius:"40px",backgroundColor:"#F9FBFC",padding:"1em",position:"relative",color: "#656565",zIndex: 0,textAlign:"left"}}>
                <div className="row text-center" style={{overflow:"auto"}}>
                { fotosList ? fotosList.map((item, index) =>
                <div key={index} className="ms-2 me-2 mb-3 border bg-white border-0 shadow-sm" style={{height:"70%",width:"30%",padding:"0px"}}>
                    asdf
                </div>
                )
                :null
                }
                </div>
            </div>
        </div>
    )
}
export default TabFoto;