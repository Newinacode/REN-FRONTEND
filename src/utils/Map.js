import React from 'react'
import { Icon } from 'leaflet'
import houseIcon from '../assets/images/navigator.png'
import L from "leaflet";
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'
import axios from 'axios'
function Map() {


    const customIcon = new Icon(
        { iconUrl:houseIcon,
         iconSize:[38,38],
         iconAnchor: [12, 41]
       }
       )
     
     
     
       const markers = [
         {
           geocode:[48.86,2.3522], 
           popUp:"Hello, I am pop up 1"
         }
       ]
  return (
    <div>
        <MapContainer center={[28.3949,84.1240]} zoom={7}>
<TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
>




</TileLayer>

<Marker  draggable={true} position={[28.3949,84.1240]} icon={customIcon}
eventHandlers={{
  dragend: (e) => {

    const lat = e.target._latlng.lat
    const long = e.target._latlng.lng
    console.log(lat,long)
    axios.get(`https://geocode.maps.co/reverse?lat=${lat}&lon=${long}`).then((res)=>{console.log(res)
  
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