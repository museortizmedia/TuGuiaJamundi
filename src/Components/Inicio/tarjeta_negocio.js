import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

export const Tarjeta = ({alto,img,btn,tags,sitio,tagtitle}) => {
    const tagTitle = tagtitle ? tagtitle :"TOP";
    const navigate = useNavigate();
    const VerMas = () => {
        var filter = document.getElementById('search').value;
        navigate("/mapa?filtro="+filter,{replace: true})
     };
    return (
        <>
        <div style={{
    borderRadius: "30px",
    backgroundPosition: "center",
  	backgroundRepeat: "no-repeat",
  	backgroundSize: "cover",
    padding: "1em",
    //display: "inline-flex",
    width: "100%",
    margin: "10px",
    height: alto,
    position: "relative",
    backgroundImage: "url("+img+")"
    }} className="bg-white shadow d-block">
            <div className='blur_blue tarjeta_tag text-center text-white fw-bold text-uppercase pt-1 pb-1'>{tagTitle}</div>

            <div className='blur tarjeta_content pl-3 pr-3 pt-2 pb-2'>
            <div className="text-muted ps-3 una_linea"># {tags.toString().replaceAll(","," ")}</div>
            <div className="fw-bold ps-3 una_linea">{sitio}</div>
            </div>
            
            <div className={`d-${btn ? "block" : "none"}`}>
            <button id="btn_vermas" className='btn btn-warning text-white' type='button' style={{position:"absolute",bottom:"-50%", borderRadius: "30px"}}
            onClick={VerMas}>
                Ver más
            </button>
            </div>
        </div> 
        </>
    )
}
export default Tarjeta;