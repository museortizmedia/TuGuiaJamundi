import React, { useEffect } from 'react'
import {Row, Col, Container} from 'react-bootstrap'

//import { useContextFire } from '../../context/fireContext'

import Menu from '../../Components/Shared/Menu'
import Footer from '../../Components/Shared/Footer'
import Banner from '../../Components/Inicio/Banner'
import Tarjeta from '../../Components/Inicio/tarjeta_negocio'
import TarjetaTop from '../../Components/Inicio/tarjeta_top'
import { Link } from 'react-router-dom'


export const Index = () => {

    //const {auth, user, getUserInfo} = useContextFire();

    useEffect(()=>{
        
    },[])
    
    return (
    <>
    {/* MENU: el menu contiene el logo con un enlace a la pagina de inicio, enlaces a exploración del mapa, configuracion de negocio y foto del perfil negocio o inciar sesión según el caso */}
    <Menu currentPage={'default'}/>
    <Link to="/perfil/xobgyMkkgZe3g2NwR0pqbzqxocn2">asd</Link>
    <Link to="/perfil/EQViylWbyrdptZG2F1d5NlLK2P02">asd</Link>
    
    {/*BANNER: una imagen y un filtro de búsqueda de negocios que filtrará el componente SITIOSBUSQUEDA*/}
    <Banner/>
    {/* SITIOSBUSQUEDA: 3 cartas con los resultados mas cercanos a la búsqueda realizada, por defecto ejecuta una búsqueda aleatoria, tiene un boton ver mas que abrirá la exploración del mapa con la busqueda realizada para ver todo el contenido*/}
    <Container fluid className="pt-5 mb-2" style={{width:"95%"}}>
    <Row>
        <Col className='col-12 col-lg-7'>
        <h2 className='noselect'>Descubre los lugares de Jamundí</h2>
        <p className='text-muted noselect'>Estos son los resultados destacados de tu búsqueda...</p>
        </Col>
        <Col className='d-none d-lg-block col-lg-5'>
        <h2 className='noselect'>Esto podría gustarte</h2>
        <p className='text-muted noselect'>Sitios destacados de la semana</p>
        </Col>
    </Row>
    <Row>
        <Col style={{height: "30vh"}} className="d-none d-lg-flex justify-content-around col-12 col-md-7">
            <Tarjeta alto="100%" sitio="Café El Paraíso" tags={["café","magia"]} tagtitle="Nuevo" img="https://i.picsum.photos/id/1060/1080/1080.jpg?hmac=B1UD-SMXcJtl9ZOf1KJxJCVFjVmSTkoN-yrznJp9Mz4"/>
            <Tarjeta alto="100%" sitio="Chorrera del Mono" tags={["agua","montaña","aventura"]} img="https://i.picsum.photos/id/806/1080/1080.jpg?hmac=rJHFPtp7FUjB7B41ZO5cmd-57MNg7L4IEZUAzTRKsbI"/>
            <Tarjeta alto="60%" sitio="Valle Blanco" tags={["caminata","extremo"]} btn="active" img="https://i.picsum.photos/id/277/1080/1080.jpg?hmac=Uib8zB7zD5qk_Nrx5BqIBRbRRRvO-de70aTcye0X2k0"/>
        </Col>
        <Row className="d-flex d-lg-none justify-content-center col-12">
            <Col style={{height: "30vh", margin: "10px"}} className="col-12">
            <Tarjeta alto="100%" sitio="Café El Paraíso" tags={["café","magia"]} tagtitle="Nuevo" img="https://i.picsum.photos/id/1060/1080/1080.jpg?hmac=B1UD-SMXcJtl9ZOf1KJxJCVFjVmSTkoN-yrznJp9Mz4"/>
            </Col>
            <Col style={{height: "30vh", margin: "10px"}} className="col-12">
            <Tarjeta alto="100%" sitio="Chorrera del Mono" tags={["agua","montaña","aventura"]} img="https://i.picsum.photos/id/806/1080/1080.jpg?hmac=rJHFPtp7FUjB7B41ZO5cmd-57MNg7L4IEZUAzTRKsbI"/>
            </Col>
            <Col style={{height: "30vh", margin: "10px"}} className="col-12 mb-5 pb-5">
            <Tarjeta alto="100%" sitio="Valle Blanco" tags={["caminata","extremo"]} btn="active" img="https://i.picsum.photos/id/277/1080/1080.jpg?hmac=Uib8zB7zD5qk_Nrx5BqIBRbRRRvO-de70aTcye0X2k0"/>
            </Col>
        </Row>
    {/* SITIOSSUGERIDOS: Side con negocios que pagan plan premium */}
    <Col className='d-block d-lg-none col-12 mt-5'>
        <h2 className="noselect">Esto podría gustarte</h2>
        <p className='text-muted noselect'>Sitios destacados de la semana</p>
    </Col>
        <Col className='col-12 col-lg-5 bg-light'>
            <div className='' style={{overflow: "auto",width: "100%", height: "40vh"}}>
                <TarjetaTop img="https://mui.kitchen/__export/1601953024234/sites/muikitchen/img/2020/10/05/9_cholado_1.jpg_1339198041.jpg" sitio="El Parque del Cholado" desc="El único y original cholado de jamundí desde $12.000"/>
                <TarjetaTop img="https://www.municipios.com.co/sitiosturisticos/20150222111434.jpg" sitio="Monumento a la vida" desc="Homenaje a las 11 personas asesinadas por el ejército, construida por Héctor Lombara"/>
                <TarjetaTop img="" sitio="Hades Rugby" desc="Participa de los entrenos del único club de Rugby de Jamundí"/>
            </div>
        </Col>
    </Row></Container>
    {/* FOOTER */}
    <Footer/>
    </>
    )
}
export default Index;