import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './comp/Menu.js'
import Banner from './comp/Banner'
//import BS_prueba from './boot-prueba.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* MENU: el menu contiene el logo con un enlace a la pagina de inicio, enlaces a exploración del mapa, configuracion de negocio y foto del perfil negocio o inciar sesión según el caso */}
    <Menu/>
    {/*BANNER: una imagen y un filtro de búsqueda de negocios que filtrará el componente SITIOSBUSQUEDA*/}
    <Banner/>
    {/* SITIOSBUSQUEDA: 3 cartas con los resultados mas cercanos a la búsqueda realizada, por defecto ejecuta una búsqueda aleatoria, tiene un boton ver mas que abrirá la exploración del mapa con la busqueda realizada para ver todo el contenido*/}
    
    {/* SITIOSSUGERIDOS: Side con negocios que pagan plan premium */}

    {/* FOOTER */}
  </React.StrictMode>
);
