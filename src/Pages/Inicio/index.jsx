import Menu from '../../Components/Inicio/Menu'
import Banner from '../../Components/Inicio/Banner'
export const Index = () => {
    return (
    <>
    {/* MENU: el menu contiene el logo con un enlace a la pagina de inicio, enlaces a exploración del mapa, configuracion de negocio y foto del perfil negocio o inciar sesión según el caso */}
    <Menu/>
    {/*BANNER: una imagen y un filtro de búsqueda de negocios que filtrará el componente SITIOSBUSQUEDA*/}
    <Banner/>
    {/* SITIOSBUSQUEDA: 3 cartas con los resultados mas cercanos a la búsqueda realizada, por defecto ejecuta una búsqueda aleatoria, tiene un boton ver mas que abrirá la exploración del mapa con la busqueda realizada para ver todo el contenido*/}
    
    {/* SITIOSSUGERIDOS: Side con negocios que pagan plan premium */}

    {/* FOOTER */}
    </>
    )
}
export default Index;