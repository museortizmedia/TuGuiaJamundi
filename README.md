![Tu Guia Jamundi Logo](https://github.com/museortizmedia/TuGuiaJamundi/blob/master/src/Images/Brand/logo1080.png?raw=true)

# Tu Guia Jamundi

Tu Guia es un proyecto web libre que busca asociar todos los negocios formales e informales del municipio de Jamundí para facilitar la búsqueda de productos y difundir lugares entre sus habitantes.

visitar web [AQUI](https://museortizmedia.github.io/TuGuiaJamundi/)

# Lista de requisitos.
En el primer planteamiento del proyecto se buscó crear una web app donde los usuarios pudieran consultar negocios de jamundi, de este modo se planteó un registro sencillo, una página de incio con algunos lugares, un buscador y un mapa para explorar todos los negocios.  
    ✔ son los requisitos aprobados  
    ❌ son los requisitos rechazados  
    ⚠ son los requisitos que no están completados

  ### Personas (no registrados)
  
- Las personas deben poder acceder a la información de los negocios y el mapa sin registrarse. ✔
- Las personas deben poder registrarse usando su correo y contraseña. ✔
- Las personas deben poder registrarse usando su cuenta de Facebook y Google. ✔

 ### Usuarios (registrados)
 
- Los usuarios deben poder ingresar y actualizar su información personal después del registro de usuario. ✔
- Los usuarios deben poder ingresar y actualizar la información de su negocio después del registro de usuario. ✔
- Los usuarios deben poder restablecer su contraseña. ✔
- Los usuarios deben poder registrar su nombre, foto de perfil y foto de portada. ✔
- Los usuarios deben poder escoger entre rol personal y empresarial. ✔
- Los usuarios deben poder ver su propio perfil y perfil de los otros usuarios. ✔

 ### Rol Personal

- El rol personal debe poder guardar los productos en una whitelist. ⚠
- El rol personal debe poder chatear con otros usuarios. ❌
- El rol personal debe poder opinar sobre otros negocios aportando un comentario y una calificación de 1 a 5 estrellas. ✔
- Los perfiles con rol personal no deben aparecer en el mapa. ⚠
- El rol personal podrá ganar puntos y subir de nivel para adquirir descuentos en compras. ✔ ⚠

 ### Rol Empresarial
 
 - El rol empresarial debe poder ingresar opcionalmente información de su negocio como teléfono, dirección y horario. ✔
 - El rol empresarial debe poder subir imágenes de su negocio. ✔
 - El rol empresarial debe poder subir información de sus productos con imagen, descripción y precio. ✔
 - El rol empresarial debe poder subir información de sus servicios con imagen, descripción y precio. ❌
 - El perfil del rol empresarial no debe poder opinar en otros perfiles con roles empresariales. ⚠
 - Las opiniones de un perfil que se vuelve empresarial se deben descartar. ⚠
 - El rol empresarial no puede subir niveles. ⚠
 
  ### Perfiles
  
 - El perfil del usuario debe poder verse en modo edición y en modo espectador. ✔
 - Si el usuario no tiene foto de portada se debe poner una automática. ✔
 - Si el usuaro no tiene foto de perfil se el debe poner una automática. ✔
 - Los perfiles de rol empresarial deben mostrar una columna de opinión con el reconteo de estrellas. ✔
 - El rol empresarial se debe identificar con un círculo dorado al rededor de su foto de perfil ✔ ⚠
 - El nivel del rol personal se debe identificar con un color: gris del 1 al 10, rojo anaranjado del 11 al 20, amarillo verdoso del 21 al 30, verde azulado del 31 al 40, azul violeta del 41 en adelante. ⚠
 - Los niveles multiplos de 10 deben tener un símbolo que indique que están a punto de subir de nivel, puede ser  ___listón, trofeo___ [⚠](a "Solo corona") o corona.
 
 ## Interfaz gráfica
 Se escogió un estilo orientado al neomorfismo y las cards. En un escritorio blanco ubicar cartas con bordes redondeados y sombras. Predominarán figuras con bordes redondeados, ordenados geometricamente, distanciados y con sombras.  
- `échele un vistazo al diseño en` [figma](https://www.figma.com/file/cNFbXsgCqgVVS907EbyThP/Tu-Guia---Jamundi?node-id=0%3A1&t=HO4ifc3oh8LIAjlW-1 "Tu Guia Jamundi - Figma")
 
 ![neomorfismo](https://cdn.dribbble.com/users/3667367/screenshots/11746472/media/e38bb12ef3af30979aa642637e14ac0d.png?compress=1&resize=400x300 "referencia de Neomorfismo")
 ![cards](https://graphichow.com/wp-content/uploads/2021/08/1627925790_918_40-CSS-Cards.jpg "referencia estilo de cartas")
 
 ### Listado de componentes
 Los componentes de react que se establecieron fuero los siguientes:
 
 | Componentes        | Página           |
| ------------- |:-------------:|
| - `Banner:` Imagen de fondo con frase del inicio. | index |
| - `Input Animado:` un buscador con un placeholder que se escribe solo | index |
|- `Tarjeta Negocio:` carta con previsualización de negocios de búsqueda | index |
|- `Tarjeta Top:` carta con previsualización de negocios destacados | index |
|- `Filtro:` consola de filtración de negocios para búsquedas por el mapa | mapa |
|- `UnMapa:` Mapa consumiendo el API de [Pigleon](https://pigeon-maps.js.org/) | mapa |
|- `Ajustes:` pagina maestra que sube y trae información de los usuarios  | ajustes |
|- `Profile:` banner del perfil que muestra foto de perfil, portada, editables y estrellas correspondientemente | perfil |
|- `No Profile:` componente que nos permitirá navegar al incio cuando se deja de detectar un perfil | perfil |
|- `TabFoto:` tab del perfil que permitirá ver las fotos de un rol empresarial | perfil |
|- `TabInfo:` tab del perfil que permitirá ver la información de un rol empresarial | perfil |
|- `TabMapa:` tab del perfil que permitirá ver el negocio de un rol empresarial en el mapa | perfil |
|- `TabProd:` tab del perfil que permitirá ver los productos de un rol empresarial | perfil |
|- `TabOpinion:` tab del perfil que permitirá ver las opiniones recibidas por un rol empresarial | perfil |
|- `Footer:` El footer de la web con enlaces del sitio  | compartidos* |
|- `Menu:` controlador del conexto, se puede iniciar y cerrar sesión  | compartidos* |
|- `FotoViewer:` visor de imágenes que cubre la pantalla  | compartidos* |
|- `Loanding:` animación de cargando que se usa mientras se recopila los datos de la web y entre pantallas  | compartidos* |
|- `Calificar:` estación que permite añadir una calificación a otro perfil o ver la hecha  | compartidos* |
|- `OpinionStar:` 5 estrellas que permite ver o seleccionar una calificación  | compartidos* |
|- `SocialLogin:` botones de Facebook y Google que permite iniciar sesión  | compartidos* |
 
___

## Bitácora

### Primera entrega: Diseño de pantallas  
En la primera entrega se entregó el HTML de las pantallas de index, login y register que puede ver en figma. Se instaló Bootstrap y se creó un CSS personalizado. También se preparó todos los componentes de estas pantallas.
![]( "")

### Segunda entrega: FrontEnd  
Luego del análisis se añadieron las pantallas de perfil, ajustes y todos los componentes extra (que podrá ver en la tabla) con información estática. Login y Register funcional con Firebase-Auth

### Tercera entrega: BackEnd  
Se agregó un Context con un componente loading para administrar toda la información de firebase asincrónica. Se configuraron las API Firebase-DB y Firebase-Storage. Y se comlpetan los perfiles con información dinámica. Se añade las API para renderizar mapas.

### Cuarta entrega: Arquitectura del backend  
![](https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/184743398/original/026fc63ff8c3dc21747af319614959a6311d7915/write-cloud-functions-using-nodejs-for-firebase-platform.png "arquitectura backend con firebase")
Para el backend se escogió usar los 3 servicios cloud de firebase: authentication, fire database y storage. Todo administrado en un context provider para que esté al alcance de toda la aplicación y sus componentes.
En la lógica se determinaron las siguientes exportaciones:  

```
       //vars
        auth: cuando existe contienen la información del firebase-auth. Con esta variable podemos saber si no hay nadie logueado, hay alguien registrado pero sin cuenta o si alguien incició sesión.
        user: cuando existe contiene la información de un usuario logueado y registrado en la base de datos junto a toda su información.
        prod: listado de productos en el caso que el usuario sea de tipo empresa.
        loading: booleano, controla si las cargas asíncronas están listas para avisar al aplicativo que debe renderizarse.
        //auth
        singup: función que consume API para registrarse
        login: función que consume API para iniciar sesión
        loginWithGoogle: función que consume API para iniciar sesión con cuenta de Google
        loginWithFacebook: función que consume API para iniciar sesión con cuenta de Facebook
        logout: función que consume API para cerrar sesión y reiniciar auth.
        recoverPassword: función que consume API para enviar un correo de restablecimiento de contraseña.
        //storage
        setProfilePic: Sube a la base de datos multimedia un archivo y reemplaza el link del archivo en la base de datos de usuarios.
        setPortada: Sube a la base de datos multimedia un archivo y reemplaza el link del archivo en la base de datos de usuarios.
        subirPhotoProducto: Sube a la base de datos multimedia un archivo y busca y reemplaza el link en los productos.
        subirFoto: Sube a la base de datos multimedia un archivo y devuelve el link del archivo.
        getFotos: Descarga todas las fotos de una colección y las devuelve como bytes.
        //bd
        userExist: Compara si un usuario determinado existe en la base de datos
        setUserInfo: Crea un nuevo usuario en la base de datos.
        getUserInfo: Devuelve un objeto con la información de determinado usuario.
        existQUERY: Para realizar consultas QUERY personalizadas.
        updateUser: Actualiza el usuario actual almacenado en user y autorizado por auth
        addProduct: Crea un producto nuevo en la colección de productos.
        getProd: Devuelve todos los productos de algún usuario.
        setFotos: Sube a la base de datos multimedia imágenes de un usuario y escribe el link en la base de datos.
        addCalif: Sube a la base de datos del calificado la calificación nueva.
        getCalif: Devuelve todas las calificaciones de un usuario especificado.
        isCalif: Devuelve el id dele autor de una calificacion
        empresaMarks: Devuelve un objeto con la latitud y longitud de todas las empresas registradas
```
