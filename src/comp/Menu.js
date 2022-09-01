import {Row, Col, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Menu = () => {
    return (
        <>
        <Container fluid className="bg-trasparent p-2 navbar-expand-sm" style={{width: "95%"}}>
        <Row className="mx-auto">
            <Col xs={2} className="my-auto">
                <a>
                    <img src={""} alt={"Logo"} style={{width: "40px"}}/>
                </a>
            </Col>
            <Col xs={10} className="text-end my-auto d-none d-sm-block">
                <a className="p-2 nav-item nav-link text-body d-inline" href="#">Link</a>
                <a className="p-2 nav-item nav-link text-body d-inline" href="#">Link</a>
                <a className="p-2 nav-item nav-link text-body d-inline" href="#">Link</a>
                <img className="p-2 nav-item nav-link text-body d-inline" src={"bird.jpg"} alt={"User"} style={{width: "40px"}}/>
            </Col>
        </Row>
        </Container>
        </>
    )
}
export default Menu;