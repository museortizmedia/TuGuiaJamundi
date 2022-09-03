import {Row, Col, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//import logo1080 from '../../Images/Brand/Logo1080.png'

export const Menu = () => {
    return (
        <>
        <Container fluid className="bg-trasparent p-2 navbar-expand-sm" style={{width: "95%"}}>
        <Row className="mx-auto">
            <Col xs={2} className="my-auto">
                <a href='asd'>
                    <img src={require('../../Images/Brand/logo1080.png')} alt={"Logo"} style={{width: "40px"}}/>
                </a>
            </Col>
            <Col xs={10} className="text-end my-auto d-none d-sm-block">
                <a className="p-2 nav-item nav-link text-body d-inline" href='dfsf' >Link</a>
                <a className="p-2 nav-item nav-link text-body d-inline" href='sdfsd'>Link</a>
                <a className="p-2 nav-item nav-link text-body d-inline" href='sdfs'>Link</a>
                <img className="p-2 nav-item nav-link text-body d-inline" src={"bird.jpg"} alt={"User"} style={{width: "40px"}}/>
            </Col>
        </Row>
        </Container>
        </>
    )
}
export default Menu;