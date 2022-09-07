import {Row, Col, Container, InputGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import AnimatedInput from './inputAnimado'

export const Banner = () => {

    return (
        <>
<Container fluid style={{
    borderRadius: "30px",
    backgroundImage: "url('https://i.picsum.photos/id/851/2160/1080.jpg?hmac=y5R_Amsnxkjzhdb8kU9gAEM1zNiFQQHAHkY4-ajdbKw')",
    //backgroundImage: "url('https://picsum.photos/2160/1080')",
    height: "300px",
    width: "95%",
    backgroundPosition: "center",
  	backgroundRepeat: "no-repeat",
  	backgroundSize: "cover",
    padding: "1em"
    }} className="shadow mt-3">
    <Row className="h-100 mx-auto">
        <Col className="my-auto pt-3 col-lg-4 col-md-7 col-sm-10 col-12">
        <Col className="my-auto col-10"><h2 className='noselect'>Te ayudamos a encontrar lo que necesitas</h2></Col>
        
        {/*<ButtonGroup size="lg" className="mt-3">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Right</Button>
</ButtonGroup>*/}
        <InputGroup className="mt-3">
        <AnimatedInput placeholder_animado={[
            "Un café mágico...",
            "Una aventura natural...",
            "Un bosque místico...",
            "Un lugar escondido...",
            "Una aventura en dos ruedas...",
            "Un deleite al paladar...",
            "Un reto al cuerpo..."
            ]}/>
        </InputGroup>
        </Col>
    </Row>
</Container>
</>
    )
}
export default Banner;