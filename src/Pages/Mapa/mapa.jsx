import {useSearchParams} from "react-router-dom";
import { FaSearch } from 'react-icons/fa';

import {Row, Col, Container, Form, Button, InputGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from '../../Components/Shared/Menu'
import Footer from '../../Components/Shared/Footer'
export const Mapa = () => {
    const [searchParams] = useSearchParams();
    const Buscar = () => {
        document.getElementById('search').placeholder="Buscar un sitio nuevo...";
        console.log('se realizó una búsqueda')
    }

    return (
        <>
        <Menu/>
        <Container fluid className="" style={{width: "85%"}}><Row>
        <Col className="col-6 mt-4">
            <div className="mapa shadow"/>
        </Col>
        <Col className="col-6 mt-4">
            <Col className="col-7">
            <InputGroup>
            <Form.Control id="search" style={{borderRadius:"30px 0px 0px 30px", width:"50%",display: "inline"}} placeholder={searchParams?searchParams.toString().split("=")[1]:"Buscar un sitio nuevo..."} autoComplete="off"/>
            <Button style={{borderRadius:"0px 30px 30px 0px",display: "inline"}} variant="warning" className='text-white' onClick={Buscar}><FaSearch/></Button>
            </InputGroup>
            </Col>
            <Col className="col-5"></Col>
        </Col>
        </Row></Container>
        <Footer/>
        </>
    )
    }
    export default Mapa;