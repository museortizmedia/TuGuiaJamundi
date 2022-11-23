import React, { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa';

export const Calificar = ({user, empresa, addCalif, getCalif, isCalif}) => {
  
    const [calificacion, setCalificacion] = useState("");
    const [estrellas, setEstrellas] = useState(null);
    const [escalificado, setCali] = useState( null );
    
//#region something
    const chooseStar = (star)=>{
        if(star===''||star===null)return;
        switch(star){
            case "1":
                document.getElementById("s1").classList.add("starselect")
                document.getElementById("s2").classList.remove("starselect")
                document.getElementById("s3").classList.remove("starselect")
                document.getElementById("s4").classList.remove("starselect")
                document.getElementById("s5").classList.remove("starselect")
                setEstrellas(1);
            break;
            case "2":
                document.getElementById("s1").classList.add("starselect")
                document.getElementById("s2").classList.add("starselect")
                document.getElementById("s3").classList.remove("starselect")
                document.getElementById("s4").classList.remove("starselect")
                document.getElementById("s5").classList.remove("starselect")
                setEstrellas(2);
            break;
            case "3":
                document.getElementById("s1").classList.add("starselect")
                document.getElementById("s2").classList.add("starselect")
                document.getElementById("s3").classList.add("starselect")
                document.getElementById("s4").classList.remove("starselect")
                document.getElementById("s5").classList.remove("starselect")
                setEstrellas(3);
            break;
            case "4":
                document.getElementById("s1").classList.add("starselect")
                document.getElementById("s2").classList.add("starselect")
                document.getElementById("s3").classList.add("starselect")
                document.getElementById("s4").classList.add("starselect")
                document.getElementById("s5").classList.remove("starselect")
                setEstrellas(4);
            break;
            case "5":
                document.getElementById("s1").classList.add("starselect")
                document.getElementById("s2").classList.add("starselect")
                document.getElementById("s3").classList.add("starselect")
                document.getElementById("s4").classList.add("starselect")
                document.getElementById("s5").classList.add("starselect")
                setEstrellas(5);
            break;
            default:
            break;
        }
    }

    const chooseStarOver = (star)=>{
        switch(star){
            case "1":
                document.getElementById("s1").classList.add("starselect")
                document.getElementById("s2").classList.remove("starselect")
                document.getElementById("s3").classList.remove("starselect")
                document.getElementById("s4").classList.remove("starselect")
                document.getElementById("s5").classList.remove("starselect")
            break;
            case "2":
                document.getElementById("s1").classList.add("starselect")
                document.getElementById("s2").classList.add("starselect")
                document.getElementById("s3").classList.remove("starselect")
                document.getElementById("s4").classList.remove("starselect")
                document.getElementById("s5").classList.remove("starselect")
            break;
            case "3":
                document.getElementById("s1").classList.add("starselect")
                document.getElementById("s2").classList.add("starselect")
                document.getElementById("s3").classList.add("starselect")
                document.getElementById("s4").classList.remove("starselect")
                document.getElementById("s5").classList.remove("starselect")
            break;
            case "4":
                document.getElementById("s1").classList.add("starselect")
                document.getElementById("s2").classList.add("starselect")
                document.getElementById("s3").classList.add("starselect")
                document.getElementById("s4").classList.add("starselect")
                document.getElementById("s5").classList.remove("starselect")
            break;
            case "5":
                document.getElementById("s1").classList.add("starselect")
                document.getElementById("s2").classList.add("starselect")
                document.getElementById("s3").classList.add("starselect")
                document.getElementById("s4").classList.add("starselect")
                document.getElementById("s5").classList.add("starselect")
            break;
            default:
            break;
        }
    }

    const chooseStarLeave = ()=>{
        document.getElementById("s1").classList.remove("starselect")
        document.getElementById("s2").classList.remove("starselect")
        document.getElementById("s3").classList.remove("starselect")
        document.getElementById("s4").classList.remove("starselect")
        document.getElementById("s5").classList.remove("starselect")
        switch(estrellas){
            case 1:
                document.getElementById("s1").classList.add("starselect")
                document.getElementById("s2").classList.remove("starselect")
                document.getElementById("s3").classList.remove("starselect")
                document.getElementById("s4").classList.remove("starselect")
                document.getElementById("s5").classList.remove("starselect")
            break;
            case 2:
                document.getElementById("s1").classList.add("starselect")
                document.getElementById("s2").classList.add("starselect")
                document.getElementById("s3").classList.remove("starselect")
                document.getElementById("s4").classList.remove("starselect")
                document.getElementById("s5").classList.remove("starselect")
            break;
            case 3:
                document.getElementById("s1").classList.add("starselect")
                document.getElementById("s2").classList.add("starselect")
                document.getElementById("s3").classList.add("starselect")
                document.getElementById("s4").classList.remove("starselect")
                document.getElementById("s5").classList.remove("starselect")
            break;
            case 4:
                document.getElementById("s1").classList.add("starselect")
                document.getElementById("s2").classList.add("starselect")
                document.getElementById("s3").classList.add("starselect")
                document.getElementById("s4").classList.add("starselect")
                document.getElementById("s5").classList.remove("starselect")
            break;
            case 5:
                document.getElementById("s1").classList.add("starselect")
                document.getElementById("s2").classList.add("starselect")
                document.getElementById("s3").classList.add("starselect")
                document.getElementById("s4").classList.add("starselect")
                document.getElementById("s5").classList.add("starselect")
            break;
            default:
            break;
        }
    }
//#endregion
    
const SendCalificacion = async()=>{
        if(escalificado){ alert('no puedes comentar otra vez'); return}
        if(calificacion!==""){
            if(estrellas!==null){
                await addCalif(empresa.uid, {autor: user.uid, estrellas: estrellas, texto: calificacion}, empresa);
                setCali({autor: user.uid, estrellas: estrellas, texto: calificacion});
            }else{console.log('te hace falta escoger una estrella')}
        }else{console.log('debes escribir una opinión')}
    }
    
    const rellenar = async() =>  await isCalif(empresa.uid, user.uid).then((result)=>setCali(result))
    if(escalificado===null){ rellenar(); }

    useEffect(()=>{
        if(escalificado) chooseStar(escalificado.estrellas.toString())
    },[escalificado])

    if(user)
    return (
        <>
        <div className='row mt-4 w-100 d-flex justify-content-center'>
            <div className='col-2 p-0 m-0'>
            <img src={user.photoURL} alt='' referrerPolicy='no-referrer' style={{width: "100%", height:"100%", borderRadius:"10px", objectFit:"cover"}}/>
            </div>
            <div className='col-10 ps-2'>
            <div className='row ps-3 h-50 fw-bolder text-dark' style={{fontSize:"1.5vw"}}>{user.displayName}</div>
            <div className='row ps-3 h-50 text-muted' style={{fontSize:"1.1vw"}}>La opinión es pública</div>
            </div>
        </div>

        <div className='w-100 mt-3 mb-3 text-center'>
        <span className='fst-italic fw-light text-decoration-underline' style={{color:"#DAD8D1",width:"100%",fontSize:"initial"}}>
            <FaStar onClick={!escalificado? ()=>chooseStar("1") : null} onMouseOver={()=>chooseStarOver("1")} onMouseOut={()=>chooseStarLeave()} id="s1" className='star' style={{fontSize:"190%",cursor:"pointer"}}/>
            <FaStar onClick={!escalificado? ()=>chooseStar("2") : null} onMouseOver={()=>chooseStarOver("2")} onMouseOut={()=>chooseStarLeave()} id="s2" className='star' style={{fontSize:"190%",cursor:"pointer"}}/>
            <FaStar onClick={!escalificado? ()=>chooseStar("3") : null} onMouseOver={()=>chooseStarOver("3")} onMouseOut={()=>chooseStarLeave()} id="s3" className='star' style={{fontSize:"190%",cursor:"pointer"}}/>
            <FaStar onClick={!escalificado? ()=>chooseStar("4") : null} onMouseOver={()=>chooseStarOver("4")} onMouseOut={()=>chooseStarLeave()} id="s4" className='star' style={{fontSize:"190%",cursor:"pointer"}}/>
            <FaStar onClick={!escalificado? ()=>chooseStar("5") : null} onMouseOver={()=>chooseStarOver("5")} onMouseOut={()=>chooseStarLeave()} id="s5" className='star' style={{fontSize:"190%",cursor:"pointer"}}/>
        </span>
        </div>

        <div className='w-100 d-flex justify-content-center'>
            <textarea className='col-12 shadow border-0 mb-5 mt-2' cols="20" maxLength="400"
            style={{height:"15vh",minHeight:"15vh",maxHeight:"53vh", fontSize:"0.8em",borderRadius:"25px",backgroundColor:"#fff",padding:"1em",color: "#656565",textAlign:"left",/*overflow:"hidden"*/}}
            placeholder={escalificado? escalificado.texto||"Tu reseña..." : null}
            value={escalificado? escalificado.texto : calificacion} onChange={(e)=>setCalificacion(e.target.value)}
            />
        </div>
        <div className='w-100 d-flex justify-content-center'>
        <button className='w-75 btn btn-warning row' disabled={escalificado?true:false} onClick={SendCalificacion}>Enviar</button>
        </div>
        </>
    )
    return<></>
}
export default Calificar;