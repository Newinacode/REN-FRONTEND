import Navbar from './Navbar'
import AddHome from '../containers/AddHome'
import AddLand from '../containers/AddLand'
import { useState,useRef } from 'react'
import React from 'react'
import {Button,Typography} from "@material-tailwind/react"
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import {Marker,Popup} from 'react-leaflet'
import osm from "../osm-providers"



function AddProperty() {
 

 
    // const [center,setCenter] = useState({lat:13.084622,lng:80.248357}) 
    // const ZOOM_LEVEL = 9
    const [property,setProperty] = useState();
    const [sale,setSale] = useState(); 
    const [home,setHome] = useState(null); 
    // const mapRef = useRef()
    return (
    <div className="flex flex-col gap-6">
        
        <Navbar/>

{/* body div */}
<div class="flex">


{/* left side form */}
<div className="flex flex-col mx-6 gap-6 w-2/3">

  
  {/* property for */}

<div className="flex flex-col gap-2">

<Typography variant="h6">For</Typography>
    <div className="flex justify-between w-1/6">

        <Button>Rent</Button>
        <Button>Buy</Button>
        </div>

</div>

       {/* property type */}

       <div className="flex flex-col gap-2">

       <Typography variant="h6">Property Type</Typography>
    <div className="flex justify-between w-1/6">

        <Button>Home</Button>
        <Button>Land</Button>
        </div>

</div>

<AddHome/>
<AddLand/>

</div>


{/* map  */}
{/* <div>
<MapContainer
center={center}
zoom={ZOOM_LEVEL}
ref={mapRef}
>
<TileLayer
url={osm.url}
attribution={osm.attribution}
/> 
</MapContainer>
</div> */}

</div>

    </div>
  )
}

export default AddProperty