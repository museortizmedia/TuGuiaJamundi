import React from "react";

import { FaPlus,  FaCrown, FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const ProfileBanner = ({profile, editMode, changePic}) => {
    return (
        <>
        <div className='w-100 mt-3 d-flex align-self-center text-center justify-content-center align-items-center noselect'>
        <div className='shadow d-flex align-self-center text-center justify-content-center align-items-center' style={{
    borderRadius: "30px",
    backgroundImage: `url('${profile.portada?profile.portada:"https://picsum.photos/2160/1080"}')`,
    height: "200px",
    width: "95%",
    backgroundPosition: "center",
  	backgroundRepeat: "no-repeat",
  	backgroundSize: "cover",
    padding: "1em",
    position: "relative",
    }}>
        {editMode===true&&
        <span style={{
                    height: "40px",
                    width:"40px",
                    borderRadius:"40px",
                    backgroundColor:"rgba(103,103,103,.7)",
                    zIndex:100,
                    position: "absolute",
                    bottom: "10px",
                    right:"20px",
                    fontSize:"1.2em",
                }}
                title={'cambiar foto de portada'}
            ><Link to={'/ajustes'}><FaPlus className="text-white"/></Link></span>
        }

        <div className='shadow'
        style={{
        height: "135px",
        width:"135px",
        borderRadius:"135px",
        backgroundColor:"lightgrey",
        zIndex:100,
        position: "relative",
        top: "100px",
        }}
        >
            {profile.photoURL?
            <img  src={profile.photoURL}
                referrerPolicy='no-referrer'
                alt=""
                style={{
                    height: "121px",
                    width:"121px",
                    borderRadius:"120px",
                    objectFit: "cover",
                    zIndex:100,
                    position: "relative",
                    top: "7px",
                }}
            />
            :
            <FaUserCircle style={{
                height: "121px",
                width:"121px",
                borderRadius:"120px",
                zIndex:100,
                position: "relative",
                top: "7px",
            }} />
            }
            {editMode===true&&
            <span style={{
                height: "40px",
                width:"40px",
                borderRadius:"40px",
                backgroundColor:"rgba(103,103,103,.7)",
                zIndex:100,
                position: "absolute",
                bottom: "8px",
                left: "0px",
                fontSize:"1.2em",
            }}
            title={'cambiar foto de perfil'}
        ><Link to={'/ajustes'}><FaPlus className="text-white"/></Link></span>
            }
            <div style={{
                    height: "40px",
                    width:"40px",
                    borderRadius:"40px",
                    backgroundColor:"lightgrey",
                    zIndex:100,
                    position: "absolute",
                    bottom: "8px",
                    left: "91px",
                    fontSize: "1.5em",
                    color: "white",
                }}>
                    
                    <div>
                    {profile.nivel%10===0&&<FaCrown
                    style={{position:"absolute",
                    bottom:"32px",
                    left:"10px",
                    color:"yellow"
                    }}
                    />
                    }
                    {profile.nivel?profile.nivel:1}
                    </div>
                    
                </div>
        </div>
    </div>
    </div>  
    </>
    )
}
export default ProfileBanner;