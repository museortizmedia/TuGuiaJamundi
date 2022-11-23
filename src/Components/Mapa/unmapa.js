import React,{useState} from "react"
import { Map, Marker, ZoomControl } from "pigeon-maps"
import { maptiler } from 'pigeon-maps/providers'

export const GMap = ({marcas, onclickmark}) => {

  const maptilerProvider = maptiler('OeC7UjZWzAPnrhmLpPbX', 'streets')

  const [center, setCenter] = useState([50.879, 4.6997])
  const [zoom, setZoom] = useState(11);

  //console.log(marcas)
  const markers = marcas? marcas.map((item, key)=> {
    return <Marker className="marcadores" key={key} payload={item[0]} width={40} anchor={[item[1],item[2]]} onClick={({event, anchor, payload}) => markclick(event, anchor, payload)}/>
    }
  ):null;

  const mapborder = (center, zoom) => {
    setCenter(center) 
    setZoom(zoom)
  }
  
  const mapclick = (e, latLng, pixel) => {
    console.log(latLng)
    console.log(pixel)
  }

  const markclick = (event, anchor, payload) => {
    console.log(payload)
    if(onclickmark){onclickmark(event, anchor,payload)}
  }

  if(!marcas)return<>Loading...</>
  return (
    <Map defaultCenter={[3.2616789726426485, -76.5406412417093]} defaultZoom={14}
    provider={maptilerProvider} dprs={[1, 2]}
    height={500}
    center={center} 
    zoom={zoom}
    onBoundsChanged={({ center, zoom }) => { mapborder(center, zoom) }}
    onClick={({ event, latLng, pixel }) => { mapclick(event,latLng,pixel) }} >
      <ZoomControl/>
      {markers}
    </Map>
  )
}
export default GMap;