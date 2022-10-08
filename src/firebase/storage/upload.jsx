import React, {useEffect} from "react";
import { useUploadHook } from "./hookStorage";

export const Upload = () => {
    const {
        files,
        percent,
        handleChange,
        handleUpload,
        handleGetAll
    } = useUploadHook();

    useEffect(()=>{
        handleGetAll();
    },[])

    return(
        <div>
            <input type="file" onChange={handleChange} accept=""/>
            <button onClick={()=>handleUpload()}>Upload to Firebase</button>
            <p>{percent} "% hecho"</p>
            {
                files.map( (item,key)=>{
                    return <img width='100px' src={item} key={key}/>
                })
            }
        </div>
    )
}