import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
function FotoViewer({info}) {
    if(info)
    return (
        <>
        <div id="photoviewer" className='bg-fotoviewer d-flex justify-content-center align-items-center' onClick={(e)=>{ if(e.target.id === "photoviewer"){ e.target.className += " d-none"  }}}>
            <div className='row bg-black border border-0 d-flex justify-content-center' style={{height:"90%", width:"50%", position:"relative",top:"0",left:"0"}}>
                <FaChevronLeft className='text-white' style={{position:"absolute",top:"45%",left:"-60%", fontSize:"10vh",cursor:"pointer"}}/>
                <FaChevronRight className='text-white' style={{position:"absolute",top:"45%",left:"60%", fontSize:"10vh",cursor:"pointer"}}/>
                <img className='w-100 border-1 p-0' src={info.imagen||""} style={{width:"100%", borderRadius:"30px 30px 0px 0px", height:"75%"}}/>
                <div className='p-0 w-100 row' style={{height:"20%",width:"80%"}}>
                    <span className='col-12 ms-3 me-3 text-white font-weight-bold w-100 align-bottom' style={{fontSize:"2em",lineHeight:"1em"}}>{info.titulo||""}</span>
                    <span className='col-12 ms-3 me-3 text-white font-weight-light w-100 text-truncate' style={{fontSize:"1em"}}>{info.desc||""}</span>
                </div>
            </div>
        </div>
        </>
    )
    return <></>
}
export default FotoViewer;