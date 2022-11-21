import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

export const TabProd = ({profile, editMode, getProd}) => {
    const [productos, setProd] = useState([])

    useEffect(()=>{
        const produ = async() =>
        {
        setProd( await getProd(profile.uid) )
        }
        produ();
        /*const produc = await getProd(profile.uid)
        setProd([...produc])*/
    },[])
    useEffect(()=>
    {
        //console.log(productos)
    },[productos])
    if(productos.length===0)return<>Loading...</>
    return (
        <div id="prod" className='w-100 col d-flex justify-content-center noselect'>
            <div className='row mb-1' style={{height: "80vh",width:"95%",borderRadius:"40px",backgroundColor:"#F9FBFC",padding:"1em",position:"relative",color: "#656565",zIndex: 0,textAlign:"left"}}>
                <div className="row text-center">
                {productos.map((item, index) =>
                    <div key={index} className="ms-2 me-2 mb-1 border bg-white border-0 shadow-sm" style={{height:"60%",width:"30%",padding:"0px"}}>
                        {item.pic?
                        <img src={item.pic} alt='' referrerPolicy='no-referrer' style={{height:"45%",width:"100%", borderRadius:"30px 30px 0px 0px", objectFit:"cover"}}/>
                        :
                        <div className="bg-muted d-flex align-items-center justify-content-center" style={{height:"45%",width:"100%",backgroundColor:"#F9FBFC", borderRadius:"30px 30px 0px 0px"}}>
                            <FaShoppingBag style={{height:"30%"}}/>
                        </div>
                        }
                        <hr className="m-0"/>
                        <div className="pt-1  ps-2 pe-2 text-black fw-bolder" style={{fontSize:"1.1em",height:"10%",lineHeight:"15px"}}>
                        {item.name}
                        </div>
                        <div className="p-2 text-muted" style={{height:"20%",fontSize:"0.75em",overflow:"auto"}}>
                        {item.desc}
                        </div>
                        <div className="mt-2 d-flex justify-content-center text-center" style={{height:"15%"}}>
                            <div className="row d-flex h-25 w-75"><span className="col btn btn-warning fw-bolder btn-sm d-flex justify-content-center" style={{fontSize:"1wh"}}>Comprar</span>
                            <span className="col-6 m-0 p-0 d-flex fw-bolder text-black justify-content-center" style={{fontSize:"1wh"}}>{`$${item.price}`}</span></div>
                        </div>
                    </div>
                )
                }
                </div>
            </div>
        </div>
    )
}
export default TabProd;