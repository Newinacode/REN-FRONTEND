import React from 'react'
import {useState} from 'react'
import { Icon } from 'leaflet'
import houseIcon from '../assets/images/navigator.png'
import L from "leaflet";
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'
import axios from 'axios'
function Map(props) {

  const [point,setPoint] = useState([28.3949,84.1240])
  const draggable = props.draggable
  const handleAddress = props.handleAddress


    const customIcon = new Icon(
        { iconUrl:houseIcon,
         iconSize:[38,38],
         iconAnchor: [12, 41]
       }
       )
     
     
     
       
  return (
    <div>
        <MapContainer center={[28.3949,84.1240]} zoom={7}>
<TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
>




</TileLayer>

<Marker  draggable={draggable} position={point} icon={customIcon}
eventHandlers={{
  dragend: (e) => {

    const lat = e.target._latlng.lat
    const long = e.target._latlng.lng
    console.log(lat,long)
    
   
    console.log(lat,long)
    axios.get(`https://geocode.maps.co/reverse?lat=${lat}&lon=${long}`).then((res)=>{
    console.log(res)
    handleAddress({
      lat:lat, 
      long:long,
      displayName:res.data.display_name,
      address:res.data.address
    })
  })
    
  },
}}
>
<Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
</Marker>






</MapContainer>
    </div>
  )
}

export default Map