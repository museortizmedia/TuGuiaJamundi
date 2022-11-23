import React, { useState,useEffect,useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from '../../Components/Shared/Menu'
import Footer from '../../Components/Shared/Footer'
import LoadingComponent from '../../Components/Shared/Loading';

import { useContextFire } from '../../context/fireContext';
import { FaEdit, FaShoppingBag, FaUserCircle } from 'react-icons/fa';
import { GeoPoint } from 'firebase/firestore';


export const Ajustes = () => {

    const[page, setPage] = useState(1);
    
    const {recoverPassword,
        user, updateUser, setProfilePic, setPortada,
        prod, addProduct, subirPhotoProducto, //getProd,
        getFotos, setFotos} = useContextFire();
    const [ajustes, setAjustes] = useState({})
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
        else if (prodImgLink) { producto['pic'] = await subirPhotoProducto(prodRefImgInput.current.files[0], "producto-"+prod.length+"_"+prodRefImgInput.current.files[0].name)}
        
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
    const[fotolink, setFotolink] = useState(null);
    const[fototitle, setFotoT] = useState('');
    const[fotodesc, setFotoDesc] = useState('');
    const[fotos, setF] = useState(null);
    const rellenarfotos = async() => {
        setF( await getFotos(user.uid) )
    }
    useEffect(()=>{
        if(!fotos){ rellenarfotos() }
        
    },[])

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
            case 2:
                if(cuentaRefNew.current.value.length>=7 && cuentaRefNew2.current.value.length>=7)
                {
                    recoverPassword(user.email);
                    cuentaRefOld.current.className=cuentaRefOld.current.className.split(" ")[1];
                    cuentaRefNew.current.value="";
                    cuentaRefNew2.current.value="";
                }else{cuentaRefNew.current.className=cuentaRefNew.current.className+" border-danger";
                cuentaRefNew2.current.className=cuentaRefNew2.current.className+" border-danger";}
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
                //console.log(JSON.stringify(newUser))
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

    const subirFotos = async() =>{
        if(fototitle!==''||fotodesc!==''){
            await setFotos(fotolink, fototitle, fotodesc);
            setFotolink(null);
            setFotoT('');
            setFotoDesc('');
            rellenarfotos();
        }else{alert('necesitas un titulo y una descripción de la imagen')}
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
                        <input name='displayName' className='form-control'
                        placeholder={user.displayName||user.email.split("@")[0]}
                        value={ajustes["displayName"]||user.displayName}
                        onChange={handleChange}
                        maxLength={16}                    
                        />

                        <span className='title_footer d-block'>Biografía</span>
                        <textarea name='bio' className='form-control'
                        placeholder={"Sin Biografía"}
                        value={ajustes["bio"]||user.bio}
                        onChange={handleChange}
                        style={{width:"100%"}}
                        />
                    </div>
                    <div className='col-4' style={{position:"relative"}}>
                        <span className='title_footer d-block'>Foto Perfil</span>
                        <img ref={imgRefProfile}
                        src={user.photoURL?user.photoURL:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"}
                        alt=''
                        style={{
                            width:"100%",
                            height:"auto",                     
                            borderRadius: "1000px",
                            objectFit:"cover",
                            position: "relative",
                        }}
                        />
                        <button className='rounded-circle border-0 bg-warning'
                        style={{width:"40px", height:"40px", position:"absolute", top:"80%",left:"75%",color:"#fff", fontSize:"1em"}}
                        onClick={()=>{if(fileRefProfile.current){fileRefProfile.current.click()}}}><FaEdit/></button>
                        <input className='d-none' name='photoURL' ref={fileRefProfile} type='file' accept="image/*" onChange={handleChangeFile}/>
                    </div>
                </div>
                <div className='row' style={{position:"relative"}}>
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
                    <button className='rounded-circle border-0 bg-warning'
                    style={{width:"40px", height:"40px", position:"absolute", top:"80%",left:"85%",color:"#fff", fontSize:"1em"}}
                    onClick={()=>{if(fileRefPortada.current){fileRefPortada.current.click()}}}><FaEdit/></button>
                    <input className='d-none' name="portada" ref={fileRefPortada} type='file' accept="image/*" onChange={handleChangeFile}/>   
                </div>
                    {user.empresa===true?<div className='row'>
                    <span className='title_footer d-block'>Etiquetas</span>
                        <div className='d-flex justify-content-center'>
                            <textarea className='form-control m-2'
                            title='agrege las etiquetas de su negocio separadas por comas'
                            style={{width:"100%"}}/>
                        </div>
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
                        <input className='form-control' value={user.email} readOnly={true} disabled></input>
                        <span className='title_footer d-block'>Cambiar contraseña</span>
                        <input ref={cuentaRefNew} className='form-control' placeholder='contraseña nueva'></input>
                        <input ref={cuentaRefNew2} className='form-control' placeholder='confirme la actual contraseña'></input>
                        <p>La contraseña debe tener más de 8 carácteres</p>
                        <button className='btn btn-warning' onClick={()=>{handleActualizar(2)}}>Actualizar Contraseña</button>
                        <span ref={cuentaRefOld} className='d-none text-muted font-italic' style={{fontSize:"0.7em",display:'inline-block'}}>Se ha enviado un mensaje de recuperación de la contraseña a tu correo electrónico.</span>
                        <br/>
                        <br/>
                        <p className='text-muted'>Si eliminas la cuenta no habrá vuelta atrás, no podrás recuperar los datos perdidos.</p>
                        <button className='btn btn-outline-warning btn-sm' onClick={()=>{alert('aun no...') }}>Elimina mi cuenta</button>
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
                    <input ref={contacRefDir} className='form-control' defaultValue={user["contacto"]&&user["contacto"].length>0?user.contacto[0]:""} placeholder={"Calle 1a # 32b-40c"}/>
                    <span className='title_footer d-block'>Teléfono del negocio</span>
                    <input ref={contacRefTel} className='form-control' defaultValue={user["contacto"]&&user["contacto"].length>0?user.contacto[1]:""} placeholder={"01 234 567"}/>
                    <span className='title_footer d-block'>Teléfono Celular</span>
                    <input ref={contacRefCel} className='form-control' defaultValue={user["contacto"]&&user["contacto"].length>0?user.contacto[2]:""} placeholder={"+57 310 123 1234"}/>
                    <span className='title_footer d-block'>Horario de atención</span>
                    <input ref={contacRefOpen} className='form-control' defaultValue={user["contacto"]&&user["contacto"].length>0?user.contacto[3]:""} placeholder={"lunes a sábado. 8:30am - 7:30pm"}/>
                    <span className='title_footer d-block'>Ubicación de tu negocio</span>
                    <input ref={contacRefLoc} className='form-control' defaultValue={user["contacto"]&&user["contacto"].length>0?user.contacto[4].latitude+", "+user.contacto[4].longitude:""} placeholder={"Latitud, Longitud"}/>

                    <button className='btn btn-warning mt-4' onClick={()=>handleActualizar(4)}>Actualizar</button>
            </div>}

            {/* vitrina */}
            {page===5&&
            <div className='col-7 row m-2 p-4 border border-0 shadow' style={{
                height:"80vh",
                backgroundColor:"#F9FBFC",
                overflow:"auto",
                }}>
                    <span className='title_footer d-block'>Tu vitrina</span>
                    <p className='text-muted'>Administra tus productos desde aquí.</p>
                    <span className='title_footer d-block'>Productos</span>

                    <div className='d-flex justify-content-center' style={{flexWrap: "wrap", overflow:"auto",height:"30vh"}}>
                        { prod ? prod.map((item, index) =>
                            <div key={index} className="ms-2 me-2 mb-3 border bg-white border-0 shadow-sm" style={{height:"100%",width:"30%",padding:"0px"}}>
                                {item.pic?
                                <img src={item.pic} alt='' referrerPolicy='no-referrer' style={{height:"45%",width:"100%", borderRadius:"30px 30px 0px 0px", objectFit:"cover"}}/>
                                :
                                <div className="bg-muted d-flex align-items-center justify-content-center" style={{height:"45%",width:"100%",backgroundColor:"#F9FBFC", borderRadius:"30px 30px 0px 0px"}}>
                                    <FaShoppingBag style={{fontSize:"2em"}}/>
                                </div>
                                }
                                <hr className="m-0"/>
                                <div className="pt-1 ps-2 pe-2 text-center text-black fw-bolder" style={{fontSize:"1.1em",height:"10%",lineHeight:"15px"}}>
                                {item.name}
                                </div>
                                <div className="p-2 text-muted" style={{height:"25%",fontSize:"0.75em",overflow:"auto"}}>
                                {item.desc}
                                </div>
                            </div>
                        )
                        :null}
                    </div>

                    <span className='title_footer d-block mt-4'>Nuevo producto</span>
                    
                    <div className='row'>
                        <div className='col'>
                            <input className='form-control' onChange={(e)=>setProdTitle(e.target.value)} value={prodTitle} placeholder='Nombre Producto'/>
                            <textarea className='form-control mt-2 mb-2' onChange={(e)=>setProdDesc(e.target.value)} value={prodDesc} placeholder='Descripcion producto'/>
                            <input className='form-control' onChange={(e)=>setProdPrice(e.target.value)} value={prodPrice} type={'number'} placeholder='Precio'/>
                            <button className='btn btn-warning mt-2' onClick={addProducto} disabled={prodImg?prodImg?false:true:prodImgLink?false:true} >Agregar</button>
                        </div>
                        <div className='col'>
                                {prodImg?
                                <img src={prodImg?prodImg:prodImgLink||''} alt='' width="100%" height='100px' style={{objectFit:"cover"}}/>
                                :
                                <div className='d-flex align-items-center justify-content-center h-50 bg-white' height='100px' width="100%" style={{borderRadius:"15px"}}><FaShoppingBag style={{fontSize:"40px"}}/></div>}
                                <input className='form-control' onChange={(e)=>setProdImg(e.target.value)} value={prodImg} placeholder='enlace de fotografía'/>
                                <button className='btn btn-warning w-100 mt-2'  onClick={()=>{if(prodRefImgInput.current){prodRefImgInput.current.click()}}}>subir foto</button>
                                <input className='d-none' name="pic" ref={prodRefImgInput} type={'file'} accept="image/*" onChange={(e)=>{ setProdImgLink(URL.createObjectURL(e.target.files[0])); setProdImg(''); } }/>
                        </div>
                    </div>
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
                    <div className='d-flex justify-content-center' style={{flexWrap: "wrap", overflow:"auto", height:"30vh"}}>
                    {fotos?
                    fotos.map((item, key)=>
                    <div key={key} className="ms-2 me-2 mb-3 border border-0 bg-white border-0 shadow-sm"
                    style={{width:"30%",height:"100%",padding:"0px"}}>
                    <img src={item.url||""} alt='' className='border' style={{height:"100%",width:"100%",objectFit:"cover"}}/>
                    </div>
                    )
                    :<span className='ps-5'>no tienes fotos aún...</span>}
                    </div>
                    <span className='title_footer d-block'>Nueva fotografía</span>
                    <input className='form-control p-2' placeholder="Título de la imagen" style={{height:"3em"}} value={fototitle} onChange={(e)=>{setFotoT(e.target.value)}} ></input>
                    <input className='form-control p-2' placeholder='Descripción de la imagen...' style={{height:"3em"}} value={fotodesc} onChange={(e)=>{setFotoDesc(e.target.value)} } ></input>
                    <div className="btn-group" style={{height:"3em"}}>
                        <button className='btn btn-warning btn-sm' onClick={()=>{document.getElementById('foto_input').click()}}>Agregar</button>
                        <input id="foto_input" className='d-none' type='file' onChange={ (e)=>{setFotolink(e.target.files[0])} }/>                   
                        <button className='btn btn-warning btn-sm' disabled={fotolink?false:true} onClick={subirFotos}>Subir Foto</button>
                    </div>
            </div>}

        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Ajustes;