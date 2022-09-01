import {Row, Col, Container, Form, InputGroup, ButtonGroup, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Banner = () => {
    return (
        <>
<Container fluid style={{
    borderRadius: "30px",
    backgroundImage: "url('https://picsum.photos/200/100')",
    height: "300px",
    width: "95%",
    backgroundPosition: "center",
  	backgroundRepeat: "no-repeat",
  	backgroundSize: "cover",
    padding: "1em"
    }}>
    <Row className="h-100">
        <Col xs={4} className="my-auto pt-3">
        <h2>Esto es un titulo</h2>
        <ButtonGroup size="lg" className="mt-3">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Right</Button>
        </ButtonGroup>
        <InputGroup className="mt-3">
        <Form.Control/>
        <Button variant="warning" id="button-addon2">
          Button
        </Button>
        </InputGroup>
        </Col>
    </Row>
</Container>
</>
    )
}
export default Banner;