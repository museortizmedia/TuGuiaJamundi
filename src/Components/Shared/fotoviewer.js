import React,{useState, useEffect} from 'react';
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa';
function FotoViewer({lista, inicial, cerrar}) {
    const [indice, setIndex] = useState(null);
    const [obj, setObj] = useState(null);

    useEffect(()=>{ 
        setIndex(inicial)
    },[inicial])

    useEffect(()=>{
        if(indice===null){setObj(null)}else{
        setObj(lista? indice>=0? lista[indice]:null:null) }
    },[indice])

    useEffect(() => {
        document.addEventListener("keydown", cerrar, false);
    
        return () => {
          document.removeEventListener("keydown", cerrar, false);
        };
      }, []);

    const siguiente = () =>{
        if(lista){
        if((indice+1)>lista.length){setIndex(0)}else{
        setIndex(indice+1)}
        }
    }
    const atras = () =>{
        if(lista){
        if((indice-1)<0){setIndex(lista.length)}else{
        setIndex(indice-1)}
        }
    }
    if(obj)
    return (
        <>
        <div id="photoviewer" className='bg-fotoviewer d-flex justify-content-center align-items-center' /*onClick={cerrar}*/>
            <div className='row bg-black border border-0 d-flex justify-content-center' style={{height:"90%", width:"50%", position:"relative",top:"0",left:"0"}}>
                <FaChevronLeft className='text-white' style={{position:"absolute",top:"45%",left:"-60%", fontSize:"10vh",cursor:"pointer"}} onClick={atras} />
                <FaChevronRight className='text-white' style={{position:"absolute",top:"45%",left:"60%", fontSize:"10vh",cursor:"pointer"}} onClick={siguiente} />
                <FaPlus className='text-white' style={{position:"absolute",top:"5%",left:"60%", fontSize:"3vh",cursor:"pointer",transform: 'rotate(45deg)'}} onClick={cerrar}/>
                <img className='w-100 border-1 p-0' alt='' src={obj.url||""} style={{width:"100%", borderRadius:"30px 30px 0px 0px", height:"75%", objectFit:"scale-down"}}/>
                <div className='' style={{height:"20%"}}>
                    <span className='text-center text-white font-weight-bold text-truncate' style={{width:"100%",fontSize:"2em",display:"inline-block"}}>{obj.title||""}</span>
                    <span className='text-center text-white font-weight-light text-truncate' style={{width:"100%",fontSize:"1em",display:"inline-block"}}>{obj.desc||""}</span>
                </div>
            </div>
        </div>
        </>
    )
    return <></>
}
export default FotoViewer;