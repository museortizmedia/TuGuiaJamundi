import React, { useState,useEffect,useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from '../../Components/Shared/Menu'
import Footer from '../../Components/Shared/Footer'
import LoadingComponent from '../../Components/Shared/Loading';

import { useContextFire } from '../../context/fireContext';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import { GeoPoint } from 'firebase/firestore';

export const Ajustes = () => {

    const[page, setPage] = useState(1);
    
    const {user, updateUser, setProfilePic, setPortada,
        prod, addProduct, subirPhotoProducto, getProd} = useContextFire();
    const [ajustes, setAjustes] = useState({})
    const [productos, setProductos] = useState(prod)
    //ref page1
    const fileRefProfile = useRef();
    const fileRefPortada = useRef();
    const imgRefProfile = useRef();
    const imgRefPortada = useRef();
    //ref page2
    const cuentaRefOld = useRef();
    const cuentaRefNew = useRef();
    const cuentaRefNew2 = useRef();  
    //ref page3
    //ref page4
    const contacRefDir = useRef();
    const contacRefTel = useRef();
    const contacRefCel = useRef();
    const contacRefOpen = useRef();
    const contacRefLoc = useRef();
    //ref page5
    const[prodTitle, setProdTitle] = useState('');
    const[prodDesc, setProdDesc] = useState('');
    const[prodPrice, setProdPrice] = useState('');
    const prodRefImgInput = useRef();
    const[prodImg, setProdImg] = useState('');
    const[prodImgLink, setProdImgLink] = useState('');

    const addProducto = async(e)=>{
        e.preventDefault();    
        const producto = {name: prodTitle, desc: prodDesc, price: prodPrice};
        if(prodImg) {producto['pic']=prodImg}
        else if (prodImgLink) { producto['pic'] = await subirPhotoProducto(prodRefImgInput.current.files[0], "producto-"+productos.length+"_"+prodRefImgInput.current.files[0].name)}
        
        await addProduct(user.uid, producto);
        resetProd();
    }
    const resetProd= ()=>{
        setProdTitle('');
        setProdDesc('');
        setProdPrice('');
        prodRefImgInput.current.value=''; 
        setProdImg('');
        setProdImgLink('');
    }
    //ref page6

    useEffect(()=>{
        //console.log(page)
    },[page])

    const handleChange = (e) =>{
        const nAjustes = {...ajustes}
        nAjustes[e.target.name] = e.target.value
        setAjustes(nAjustes)
    }

    const handleActualizar = async(page) =>{
        var nAjustes = {...ajustes};
        var newUser = {}
        switch(page){
            case 1:
                //comprobar si hay cargados imágenes
                if(fileRefProfile.current.files.length>0){
                nAjustes["photoURL"] = await setProfilePic(fileRefProfile.current.files[0])}
                if(fileRefPortada.current.files.length>0){
                    nAjustes["portada"] = await setPortada(fileRefPortada.current.files[0])}
                newUser = {...user, ...nAjustes}
                await updateUser(newUser);
            break;
            case 4:
                const contacto = [];
                contacto[0] = contacRefDir.current.value||'';
                contacto[1] = contacRefTel.current.value||'';
                contacto[2] = contacRefCel.current.value||'';
                contacto[3] = contacRefOpen.current.value||'';
                contacto[4] = contacRefLoc.current.value? new GeoPoint(contacRefLoc.current.value.split(", ")[0],contacRefLoc.current.value.split(", ")[1]) : new GeoPoint(0,0);
                nAjustes["contacto"] = [ ...contacto];
                newUser = {...user, ...nAjustes}
                console.log(JSON.stringify(newUser))
                await updateUser(newUser);
            break;
            default:
            break;
        }
        
    }

    const handleChangeFile = (e) =>{
        const archivolocal = e.target.files[0];
        const urlimage = URL.createObjectURL(archivolocal)||"";
        if(e.target.name==='photoURL'){imgRefProfile.current.src = urlimage
        }else{ imgRefPortada.current.src = urlimage}
        /*Convertir en arreglo de bits (codificar archivos) */
        /*const files = e.target.files;
        const fileReader = new FileReader();
        if(fileReader && files && files.length > 0){
            fileReader.readAsArrayBuffer(files[0]);
            fileReader.onload = async() =>{
                const imageData = fileReader.result;
                //almacenar o subir data
            }
        }*/
    }

    const changePage = (newpage) =>{
        setPage(newpage);
    }

    const cambiarCuenta = async() => {
        if (window.confirm("¿Seguro quiere cambiar del tipo de cuenta?")) {
          const empresario = {...user, empresa: !user["empresa"]}
          await updateUser({...empresario})
        }else{
          //
        }
    }


    if(!user) return <LoadingComponent/>
    return (
        <>
        <Menu currentPage='ajustes'/>
        <div className='d-flex justify-content-center noselect'>
        <div className='row' style={{width:"95%"}}>
            <div className='col-4 m-4 p-2'>
                <div className='row border border-0 shadow mb-5 d-flex'
                style={{
                    height:"13vh",
                    backgroundColor:"#F9FBFC"
                }}>
                    <div className='col-4 d-flex me-2'>
                    {user.photoURL?
                    <img className='img-fluid aling-self-center'
                    src={user.photoURL}
                    alt=''
                    style={{height:"80px",width:"80px",objectFit:"cover",borderRadius:"1000px"}}/>
                    :
                    <FaUserCircle style={{fontSize:"5em"}}/>
                    }
                    </div>
                    <div className='col-7'>
                        <div className='row fw-bolder my-auto' style={{fontSize:"1.2em"}}>{user.displayName||user.email.split("@")[0]}</div>
                        <div className='row text-muted my-auto'>{user.empresa===true?"Tu cuenta es empresarial":"Tu cuenta es personal"}</div>
                    </div>
                    
                </div>
                <div className='row d-flex justify-content-center border border-0 shadow'
                style={{
                    height: user.empresa?"40vh":"20vh",
                    backgroundColor:"#F9FBFC",
                    color: "#6D6D6D",
                    fontSize: "1.5em",
                    cursor: "pointer"

                }}>
                    <div className='row w-75 d-flex justify-content-center border-bottom'
                    onClick={()=>changePage(1)}>Tu perfil</div>
                    <div className='row w-75 d-flex justify-content-center border-bottom'
                    onClick={()=>changePage(2)}>Cuenta</div>
                    {
                    user.empresa?
                    <>
                    <div className='row w-75 d-flex justify-content-center border-top border-bottom'
                    onClick={()=>changePage(4)}>Negocio</div>
                    <div className='row w-75 d-flex justify-content-center border-top border-bottom'
                    onClick={()=>changePage(5)}>Vitrina</div>
                    <div className='row w-75 d-flex justify-content-center border-top border-bottom'
                    onClick={()=>changePage(6)}>Fotos</div>
                    </>
                    :
                    <div className='row w-75 d-flex justify-content-center'
                    onClick={()=>changePage(3)}>WhiteList</div>                    
                    }
                    
                </div>
            </div>

            {/* tu perfil */}
            {page===1&&
            <div className='col-7 m-2 p-4 border border-0 shadow'
            style={{
                height:`${user.empresa?"90vh":"85vh"}`,
                backgroundColor:"#F9FBFC",
            }}>
                <div className='row'>
                    <div className='col-8'>
                        <span className='title_footer d-block'>Nombre {user.empresa?"de tu negocio":null}</span>
                        <input name='displayName'
                        placeholder={user.displayName||user.email.split("@")[0]}
                        value={ajustes["displayName"]||user.displayName}
                        onChange={handleChange}
                        maxLength={16}                    
                        />

                        <span className='title_footer d-block'>Biografía</span>
                        <textarea name='bio'
                        placeholder={"Sin Biografía"}
                        value={ajustes["bio"]||user.bio}
                        onChange={handleChange}
                        style={{width:"100%"}}
                        />
                    </div>
                    <div className='col-4'>
                        <span className='title_footer d-block'>Foto Perfil</span>
                        <img ref={imgRefProfile}
                        src={user.photoURL?user.photoURL:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"}
                        alt=''
                        style={{
                            width:"100px",
                            height:"100px",                     
                            borderRadius: "1000px",
                            objectFit:"cover",
                            position: "relative",
                        }}
                        />
                        <button onClick={()=>{if(fileRefProfile.current){fileRefProfile.current.click()}}}><FaEdit/></button>
                        <input className='d-none' name='photoURL' ref={fileRefProfile} type='file' accept="image/*" onChange={handleChangeFile}/>
                    </div>
                </div>
                <div className='row'>
                    <span className='title_footer d-block'>Foto Portada</span>
                    <img ref={imgRefPortada}
                    src={user.portada?user.portada:"https://picsum.photos/2160/1080"}
                    title={!user.portada?'Esta imagen la escogemos al azar':''}
                    alt=''
                    style={{
                        height: "150px",
                        width: "100%",
                        borderRadius: "30px",
                        padding: "1em",
                        objectFit: "cover",
                    }}
                    />
                    <button onClick={()=>{if(fileRefPortada.current){fileRefPortada.current.click()}}}><FaEdit/></button>
                    <input className='d-none' name="portada" ref={fileRefPortada} type='file' accept="image/*" onChange={handleChangeFile}/>
                    
                    
                </div>
                    {user.empresa===true?<div className='row'>
                    <span className='title_footer d-block'>Etiquetas</span>
                        <textarea title='agrege las etiquetas de su negocio separada por comas'></textarea>
                    </div>:null}

                    {!user.empresa===true?<p className='text-muted'>Todos los campos son opciones y usted puede eliminar la información en cualquier momento</p>:null}
                    <button className='btn btn-warning' onClick={() => handleActualizar(1)}>Actualizar</button>

                </div>}
            {/*cuenta*/}
            {page===2&&
            <div className='col-7 row m-2 p-4 border border-0 shadow' style={{
                height:"80vh",
                backgroundColor:"#F9FBFC",
                }}>

                    <div className='col-7'>
                        <span className='title_footer d-block'>Correo electrónico</span>
                        <input value={user.email} readOnly={true} disabled></input>
                        <span className='title_footer d-block'>Cambiar contraseña</span>
                        <input placeholder='contraseña actual'></input>
                        <input placeholder='contraseña nueva'></input>
                        <input placeholder='confirme la actual contraseña'></input>
                        <p>La contraseña debe tener más de 8 carácteres</p>
                        <button onClick={()=>{alert('aun no...')}}>Actualizar</button>
                        <br/>
                        <button>eliminar cuenta</button>
                        <p className='tect_muted'>Si eliminas la cuenta no habrá vuelta atrás, no podrás recuperar los datos perdidos.</p>
                        <button onClick={()=>{alert('aun no...') }}>Elimina mi cuenta</button>
                    </div>

                    <div className='col'>
                    <span className='title_footer d-block'>Tipo de cuenta</span>
                    <span className='title_footer badge bg-warning d-block btn btn-warning'
                    onClick={cambiarCuenta}>
                        cuenta {user["empresa"]===true?"empresarial":"personal"}
                    </span>
                        {user["empresa"]===false?
                        <p>
                            Al cambiar a empresarial perderá todos los niveles adquiridos hasta ahora, se eliminarán todas sus opiniones y no podrá realizar más.
                        </p>
                        :
                        <p>
                            Al cambiar a personal no podrá ofrecer productos ni aparecer en el mapa. Pero podrá dar opiniones y subir de niveles.
                        </p>}
                    </div>
            </div>}

            {/* whitelist */}
            {page===3&&
            <div className='col-7 row m-2 p-4 border border-0 shadow' style={{
                height:"80vh",
                backgroundColor:"#F9FBFC",
                }}>
                    <span className='title_footer d-block'>White List</span>
                    <p className='text-muted'>La white list es la lista para mostrar los productos que más te gustan. Las personas podrán señalar que les gusta los productos de tu white list, también puedes votar por otros productos de la white list de otros.</p>
            </div>
            }

            {/* negocio */}
            {page===4&&
            <div className='col-7 row m-2 p-4 border border-0 shadow' style={{
                height:"80vh",
                backgroundColor:"#F9FBFC",
                }}>
    
    
    
    
    
                    <span className='title_footer d-block'>Dirección del negocio</span>
                    <input ref={contacRefDir} defaultValue={user["contacto"]?user.contacto[0]:""}></input>
                    <span className='title_footer d-block'>Teléfono del negocio</span>
                    <input ref={contacRefTel} defaultValue={user["contacto"]?user.contacto[1]:""}></input>
                    <span className='title_footer d-block'>Teléfono Celular</span>
                    <input ref={contacRefCel} defaultValue={user["contacto"]?user.contacto[2]:""}></input>
                    <span className='title_footer d-block'>Horario de atención</span>
                    <input ref={contacRefOpen} defaultValue={user["contacto"]?user.contacto[3]:""}></input>
                    <span className='title_footer d-block'>Ubicación de tu negocio</span>
                    <input ref={contacRefLoc} defaultValue={user["contacto"]?user.contacto[4].latitude+", "+user.contacto[4].longitude:""}></input>

                    <button className='btn btn-warning' onClick={()=>handleActualizar(4)}>Actualizar</button>
            </div>}

            {/* vitrina */}
            {page===5&&
            <div className='col-7 row m-2 p-4 border border-0 shadow' style={{
                height:"80vh",
                backgroundColor:"#F9FBFC",
                }}>
                    <span className='title_footer d-block'>Tu vitrina</span>
                    <p className='text-muted'>Administra tus productos desde aquí.</p>
                    <span className='title_footer d-block'>Productos</span>

                    {prod.length}

                    <span className='title_footer d-block'>Nuevo producto</span>
                    <input onChange={(e)=>setProdTitle(e.target.value)} value={prodTitle} placeholder='Nombre Producto'/>
                    <textarea onChange={(e)=>setProdDesc(e.target.value)} value={prodDesc} placeholder='Descripcion producto'/>
                    <input onChange={(e)=>setProdPrice(e.target.value)} value={prodPrice} type={'number'} placeholder='Precio'/>
                    <img src={prodImg?prodImg:prodImgLink||''} alt='' height='100px' style={{objectFit:"cover"}}/>
                    <input onChange={(e)=>setProdImg(e.target.value)} value={prodImg} placeholder='enlace de fotografía'/>
                    <button onClick={()=>{if(prodRefImgInput.current){prodRefImgInput.current.click()}}}>subir foto</button>
                    <input className='d-none' name="pic" ref={prodRefImgInput} type={'file'} accept="image/*" onChange={(e)=>{ setProdImgLink(URL.createObjectURL(e.target.files[0])); setProdImg(''); } }/>
                    <button onClick={addProducto}>Agregar</button>
            </div>}

            {/* fotos */}
            {page===6&&
            <div className='col-7 row m-2 p-4 border border-0 shadow' style={{
                height:"80vh",
                backgroundColor:"#F9FBFC",
                }}>
                    <span className='title_footer d-block'>Tus fotos</span>
                    <p className='text-muted'>Agrega fotos a tu galería para que la gente conozca de tu negocio.</p>
                    <span className='title_footer d-block'>Fotografias</span>
                    <span className='title_footer d-block'>Nueva fotografía</span>
                    <input placeholder="Título de la imagen"></input>
                    <input placeholder='Descripción de la imagen...'></input>
                    <button>Agregar</button>
                    <input placeholder='Enlace de la imagen'></input>                    
                    <button>subir foto</button>
            </div>}

        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Ajustes;