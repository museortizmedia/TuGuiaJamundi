import React from "react";
import { FaStar } from 'react-icons/fa';

export const OpinionStar = ({profile, forcestar}) => {

    const prom = profile?profile.stars?((profile.stars[0]*1)+(profile.stars[1]*2)+(profile.stars[2]*3)+(profile.stars[3]*4)+(profile.stars[4]*5))/((profile.stars[0]+profile.stars[1]+profile.stars[2]+profile.stars[3]+profile.stars[4])):0:null;
    const promDisplay = profile?( Math.floor(prom*100) /100 ).toFixed(1):null;


    //estrellas de resumen perfil
    if(profile?profile.empresa===true:false)  
    return (
        <>
        <div className='fst-italic fw-light text-decoration-underline' style={{color:"#DAD8D1"}}>
            <span className="me-2">{promDisplay}</span>
            <FaStar className={`${prom>1?"starselect":null}`}/>
            <FaStar className={`${prom>2?"starselect":null}`}/>
            <FaStar className={`${prom>3?"starselect":null}`}/>
            <FaStar className={`${prom>4?"starselect":null}`}/>
            <FaStar className={`${prom>5?"starselect":null}`}/>
        </div>
        </>
    )
    if(forcestar)
    return (
    <>
        <div className='fst-italic fw-light text-decoration-underline d-inline' style={{color:"#DAD8D1"}}>
            <FaStar className={`${forcestar>=1?"starselect":null}`}/>
            <FaStar className={`${forcestar>=2?"starselect":null}`}/>
            <FaStar className={`${forcestar>=3?"starselect":null}`}/>
            <FaStar className={`${forcestar>=4?"starselect":null}`}/>
            <FaStar className={`${forcestar>=5?"starselect":null}`}/>
        </div>
    </>)
    return<></>
}
export default OpinionStar;