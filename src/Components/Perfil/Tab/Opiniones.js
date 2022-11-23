import React,{useState,useEffect} from "react";
import { FaCrown } from "react-icons/fa";
import LoadingComponent from "../../Shared/Loading";
import OpinionStar from "../../Shared/stars";

export const TabOpinion = ({profile, editMode, getCalif, getUserInfo}) => {
    const [opiniones, setopin] = useState(null);
    const [opinionesViewer, setOV] = useState([]);

    useEffect(()=>{
        if(!opiniones){
            const rellenarOpiniones = async()=>{
                setopin(await getCalif(profile.uid));
            }
        rellenarOpiniones();}
    },[])

    useEffect(()=>{
        const rellenarInfoUser = async(lista) =>{
            let res = []
            for(var i=0;i<lista.length;i++)
            {
                const obj = {...lista[i], userinfo: await getUserInfo(lista[i].autor)}
                res.push(obj);
            }
            setOV(res);
        }
        if(opiniones!=null){
            rellenarInfoUser(opiniones);
    }},[opiniones])
    

    if(opinionesViewer.length>0)
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
                {opinionesViewer.map((item, key)=>

                <div className="row w-100 mb-2" key={key}>
                <div className="col-4">
                    <div className="bg-enterpriseGradient" style={{height:"100px",width:"100px",position:"relative",borderRadius:"100px"}}>
                        <img className="shadow"
                        src={item.userinfo.photoURL||""}
                        height='90px' width='90px'
                        alt=''
                        style={{objectFit:"cover", borderRadius:"40px",position: "absolute",top:"5%",left:"5%"}}
                        />
                    </div>
                </div>
      
                <div className="col-8 text-start">
                    <div className="row"> <div className="p-0 una_linea"><span className="fw-bolder lh-1 me-2" style={{color:"#303030", fontSize:"1.2em"}}>{item.userinfo.displayName}</span> <OpinionStar forcestar={item.estrellas}/></div> </div>
                    <div className="row h-75" style={{overflowY:"auto"}}>{item.texto}</div>
                </div>
                </div>
                )}

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
    return <LoadingComponent/>
}

export default TabOpinion;