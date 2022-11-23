import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import FotoViewer from "../../Shared/fotoviewer";

export const TabFoto = ({profile, editMode, getFotos}) => {
    const [fotosList, setFL] = useState(null);
    const [index, setI] = useState(null);
    useEffect(()=>{
        const fotos = async() =>
        {
            setFL( await getFotos(profile.uid) )
        }
        fotos();
    },[])

    useEffect(()=>{
        //console.log(index);
    },[index])
    
    const cerrarV = () => {setI(null) }
    return (
        <>
        <FotoViewer lista={fotosList} inicial={index} cerrar={cerrarV}/>
        <div id="foto" className='w-100 col d-flex justify-content-center noselect'>
            <div className='row mb-1' style={{height: "80vh",width:"95%",borderRadius:"40px",backgroundColor:"#F9FBFC",padding:"1em",position:"relative",color: "#656565",zIndex: 0,textAlign:"left"}}>
                <div className="row text-center" style={{overflow:"auto"}}>
                { fotosList ? fotosList.map((item, index) =>
                <div key={index} className="ms-2 me-2 mb-3 border bg-white border-0 shadow-sm" style={{height:"70%",width:"30%",padding:"0px"}}>
                    <img alt='' src={item.url||""}
                    className='h-100 w-100 border'
                    style={{objectFit:"cover",cursor:"pointer"}}
                    onClick={()=>setI(index)}/>
                </div>
                )
                :null
                }
                {editMode?
                <div className="ms-2 me-2 mb-1 bg-white border border-0 shadow-sm d-flex align-items-center justify-content-center" style={{height:"70%",width:"30%",padding:"0px"}}>
                    <Link to='/ajustes'> <FaPlusCircle className="plus-añadir"/> </Link>
                </div>:null}
                </div>
            </div>
        </div>
        </>
    )
}
export default TabFoto;