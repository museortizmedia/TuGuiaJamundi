import {Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const TarjetaTop = ({img, sitio, desc}) => {

    return (
        <>
        <Row className='m-2 mb-4' style={{width:"95%", cursor: "pointer"}}>
        
        <Col xs={3} style={{
        borderRadius: "30px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100px",
        height: "100px",
        position: "relative",
        backgroundImage: "url("+img+")",
        }} className="bg-warning shadow-sm my-auto">
        </Col>
        <Col className='my-auto'>  
            <h5 className="fw-bold">{sitio}</h5>
            <hr style={{margin: "5px"}}/>
            <p className="text-muted">{desc}</p>
        </Col>        
        </Row>
        </>
    )
}
export default TarjetaTop;