import React from "react";
//import { fireContext } from "../../../context/fireContext";

export const TabProd = ({profile, editMode}) => {
    //const {} = fireContext()

    /*const mostrarProductos =() => {
        //
    }*/
    return (
        <div id="prod" className='w-100 col d-flex justify-content-center noselect'>
            <div className='row mb-1' style={{height: "80vh",width:"95%",borderRadius:"40px",backgroundColor:"#F9FBFC",padding:"1em",position:"relative",color: "#656565",zIndex: 0,textAlign:"left"}}>
                <div className="row">
                    <div className="col-2 m-2 border bg-white border-0">a</div>
                    <div className="col-2 m-2 border bg-white border-0">a</div>
                    <div className="col-2 m-2 border bg-white border-0">a</div>
                    <div className="col-2 m-2 border bg-white border-0">a</div>
                    <div className="col-2 m-2 border bg-white border-0">a</div>
                    <div className="col-2 m-2 border bg-white border-0">a</div>
                </div>
            </div>
        </div>
    )
}
export default TabProd;