import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { FaSearch, FaCompass} from 'react-icons/fa';

import { useContextFire } from '../../context/fireContext';

import Menu from '../../Components/Shared/Menu'
import Footer from '../../Components/Shared/Footer'
import GMap from '../../Components/Mapa/unmapa';

export const Mapa = () => {
    const {empresaMarks} = useContextFire();

    const [empresas, setEmpresa] = useState();


    const {filtro} = useParams()

    useEffect(() => {
        console.log(filtro)
        const rellenarEmpresas = async()=>{ setEmpresa(await empresaMarks()) }
        if(!empresas){
            rellenarEmpresas();
        }
        
    }, [])
    

    const Buscar = () => {
        document.getElementById('search').placeholder="Buscar un sitio nuevo...";
        console.log('se realizó una búsqueda')
    }

    return (
        <>
        <Menu currentPage='mapa'/>
        <div className="container-fluid" style={{width: "95%", height:"80vh"}}><div className='row'>

            <div className="col-6 mt-4 round text-center">
                {/*<div className="mapa shadow"/>*/}
                <GMap marcas={empresas}/>
            </div>

            <div className="col-6 row mx-auto my-auto mt-4">

                <div className='row d-block mb-2'>
                    <div className="input-group">
                        <input type="text" className="form-control"
                        id="search"
                        style={{borderRadius:"30px 0px 0px 30px",display: "inline"}}
                        placeholder={filtro? filtro:"Buscar un sitio nuevo..."}
                        autoComplete="off"
                        />
                        <button style={{borderRadius:"0px 30px 30px 0px",display: "inline"}}
                            className='btn btn-warning'
                            onClick={Buscar}>
                                <FaSearch/>
                        </button>
                        <button className='btn btn-warning ms-4'
                            style={{borderRadius:"30px"}}>
                                <FaCompass style={{fontSize:"1.4em"}}/> {" Descubrir"}
                        </button>
                    </div>
                </div>

                <div className='row d-block noselect'>
                    <div className='' style={{borderRadius:"35px"}}>
                        <div style={{borderRadius:"30px",width:"100%", border:"1px solid #d1d1d1", padding:".8rem"}}>
                        <span className='tag_filter'>Tag1</span>
                        {/* map arreglo tag - funcion añadir al array */}
                        <button className='tag_filter' style={{border:"0px",marginLeft:"0.2rem"}}>+</button>
                        </div>
                    </div>
                </div>

        </div>

        </div></div>
        <Footer/>
        </>
    )
}
export default Mapa;